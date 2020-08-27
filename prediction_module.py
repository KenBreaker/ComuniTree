from sklearn.ensemble import RandomForestClassifier
# from sklearn.neighbors import KNeighborsClassifier
from sklearn.multiclass import OneVsRestClassifier
from sklearn.metrics import auc, roc_curve, classification_report
from sklearn.model_selection import train_test_split
from sklearn.model_selection import KFold
from sklearn.preprocessing import label_binarize
# from sklearn import tree
from joblib import dump, load
from scipy import interp
from itertools import cycle
import matplotlib.pyplot as plt
import json
import numpy as np

class Predictor:
    # Clasificador y datos
    # clf_algorithm = tree.DecisionTreeClassifier(criterion="entropy")                            # Algoritmo Decision Tree para la clasificación
    # clf_algorithm = KNeighborsClassifier(n_neighbors=5, algorithm='auto', metric='manhattan')   # Algoritmo kNN para la clasificación
    clf_algorithm = RandomForestClassifier(n_estimators=67, criterion="entropy")                # Algoritmo RFG para la clasificación
    clf_algorithm = OneVsRestClassifier(clf_algorithm)                                          # Transforma el clasificador a una versión One vs Rest para multiclase
    labels = ['0','1','2']                                                                      # Nombre de las etiquetas/clases/target
    n_labels = len(labels)                                                                      # Cantidad de etiquetas/clases/target
    
    # Flags
    f_new = False                                                                   # Bandera para saber si el modelo generado es nuevo o no

    # Variable y resultados de métricas de evaluación de rendimiento
    k_fold = 10                                                                     # Cantidad de splits que se harán para k-fold Cross Validation
    precision = dict()                                                              # Precision de cada clase (0,1,2)
    recall = dict()                                                                 # Recall de cada clase (0,1,2)
    f1_score = dict()                                                               # F(1)-Score de cada clase (0,1,2)
    micro_avg = dict()                                                              # Promedio micro de precision, recall y f(1)-score
    macro_avg = dict()                                                              # Promedio macro de precision, recall y f(1)-score
    f1_avg = float(0)                                                               # F(1)-Score promedio entre todos los splits

    # Constructor para predicción
    def __init__(self, data):
        self.prepareEvalDicts(self)
        self.classifier = self.getPredictiveModel()
        if(self.f_new):
            self.saveModel(self.classifier)
        self.predictions = self.predictRisk(data)
        self.writeToJSONFile(data, self.predictions)


    # Constructor para generar nuevo modelo basado en nueva data
    @classmethod
    def generateNewModel(self) -> 'Predictor':
        self.prepareEvalDicts(self)
        self.f1_avg = float(0)
        # print('{}\n\n{}\n\n{}\n\n{}\n\n{}\n\n{}'.format(self.precision, self.recall, self.f1_score, self.micro_avg, self.macro_avg, self.f1_avg), end='\n\n\n')
        self.classifier = self.trainModel(self)
        self.f_new = self.compareModels(self)
        if(self.f_new):
            self.saveModel(self, self.classifier)
        return self.f1_avg

    
    # Retorna el F(1)-Score promedio del modelo guardado
    @classmethod
    def getSavedModelPerformance(self) -> 'Predictor':
        old_f1_avg = float(0)
        try: 
            # Chequea que existan ambos archivos o se guarda el nuevo modelo
            load("output/clf.joblib")
            with open("output/clf_performance.csv", "r") as f:
                f.readline()
                line = f.readline().replace('\n','').split(';')
                #print(line[1].replace('.','',1))
                if line[0] == 'F(1)-Score Micro Average' and line[1].replace('.','',1).isdigit():
                    old_f1_avg = float(line[1])
                else:
                    print('Formato incorrecto. Se guardará nuevo modelo')
        except FileNotFoundError:
            print('Error al abrir modelo guardado o su evaluación. Se guardará nuevo modelo')
        return old_f1_avg

    # Genera la curva ROC y su área para cada clase (De https://scikit-learn.org/stable/auto_examples/model_selection/plot_roc.html)
    @classmethod
    def getROCCurve(self) -> 'Predictor':
        fpr, tpr, roc_auc = dict(), dict(), dict()
        clf = load('output/clf.joblib')
        X, y = self.readTrainingData(self)
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=.3, random_state=0)
        y_score = clf.fit(X_train, y_train).predict_proba(X_test)
        # Computa la curva ROC y su área para cada clase
        for i in range(self.n_labels):
            fpr[i], tpr[i], _ = roc_curve(y_test[:, i], y_score[:, i])
            roc_auc[i] = auc(fpr[i], tpr[i])
        # Computa la curva ROC de los micro y macro promedios y sus áreas
        fpr['micro'], tpr['micro'], _ = roc_curve(y_test.ravel(), y_score.ravel())
        roc_auc['micro'] = auc(fpr['micro'], tpr['micro'])
        all_fpr = np.unique(np.concatenate([fpr[i] for i in range(self.n_labels)]))
        mean_tpr = np.zeros_like(all_fpr)
        for i in range(self.n_labels):
            mean_tpr += interp(all_fpr, fpr[i], tpr[i])
        mean_tpr /= self.n_labels
        fpr['macro'] = all_fpr
        tpr['macro'] = mean_tpr
        roc_auc['macro'] = auc(fpr['macro'], tpr['macro'])
        # Genera el gráfico de la curva ROC
        plt.figure()
        lw = 2
        plt.plot(fpr['micro'], tpr['micro'], label='Micro-Average ROC Curve (area = {:.2f})'.format(roc_auc['micro']), color='deeppink', linestyle=':', linewidth=4)
        plt.plot(fpr['macro'], tpr['macro'], label='Macro-Average ROC Curve (area = {:.2f})'.format(roc_auc['macro']), color='navy', linestyle=':', linewidth=4)
        colors = cycle(['aqua', 'darkorange', 'cornflowerblue'])
        for i, color in zip(range(self.n_labels), colors):
            plt.plot(fpr[i], tpr[i], color=color, lw=lw, label='Label {} ROC Curve (area = {:.2f})'.format(i, roc_auc[i]))
        plt.plot([0,1], [0,1], 'k--', lw=lw)    # Baseline
        plt.xlim([0.0, 1.0])
        plt.ylim([0.0, 1.05])
        plt.xlabel('False Positive Rate')
        plt.ylabel('True Positive Rate')
        plt.title('Multi-Class Receiver Operating Characterstic Curve')
        plt.legend(loc='lower right')
        plt.show()
 
    # Establece keys para los diccionarios de evaluación
    def prepareEvalDicts(self):
        self.precision = dict()
        self.recall = dict()
        self.f1_score = dict()
        self.micro_avg = dict()
        self.macro_avg = dict()
        for i in range(self.k_fold):
            self.precision[i] = dict()
            self.recall[i] = dict()
            self.f1_score[i] = dict()
            self.micro_avg[i] = {'precision': float(0), 'recall': float(0), 'f1-score': float(0)}
            self.macro_avg[i] = {'precision': float(0), 'recall': float(0), 'f1-score': float(0)}
            for j in range(self.n_labels):
                self.precision[i][j] = float(0)
                self.recall[i][j] = float(0)
                self.f1_score[i][j] = float(0)


    # Carga un modelo predictivo o lo crea en caso de no existir
    def getPredictiveModel(self):
        try:
            clf = load('output/clf.joblib')
        except FileNotFoundError:
            clf = self.trainModel()
            self.f_new = True
        return clf

    
    # Crea un árbol de decisión según el dataset provisto
    def trainModel(self):
        attributes, target = self.readTrainingData(self)
        self.evaluateModel(self, attributes, target)
        clf = self.clf_algorithm.fit(attributes, target)
        return clf


    def readTrainingData(self):
        filepath = "input/data.csv"         # Dirección del dataset de entrenamiento
        attributes = []                     # Valor de los atributos en el dataset en cada tupla
        target = []                         # Valor de la clase en cada tupla
        try:
            file = open(filepath, "r")
            # Lee hasta encontrar el str que indica que comenzará a leer la data
            for line in file:
                if "# DATA" in line:
                    file.readline()
                    break
            # Lee y asigna los valores del dataset a sus variables respectivas
            for line in file:
                line = line.replace("\n", "").split(";")
                _len = len(line)
                attributes.append([line[i] for i in range(_len - 1)])
                target.append(line[_len - 1])
            file.close()
        except FileNotFoundError:
            print("El archivo " + filepath + " no existe")
            exit(-1)
        return np.array(attributes), np.array(label_binarize(target, classes=self.labels))


    # Evalua un clasificador con F(1)-Score y k-fold Cross Validation
    def evaluateModel(self, att, target):
        X_train, X_test, y_train, y_test = self.getDataSplit(self, att.tolist(), target.tolist())
        for i in range(self.k_fold):
            y_score = self.clf_algorithm.fit(X_train[i], y_train[i]).predict_proba(X_test[i])
            _y_score = self.getBinaryPredictions(self, y_score)
            # print(X_test[i], '\n\n', y_test[i], '\n\n', y_score, end='\n\n\n')
            reports = classification_report(y_test[i], _y_score, target_names=self.labels, output_dict=True, zero_division=1)
            '''
            # Imprime por pantalla el contenido del reporte de clasificación
            for item in reports.items():
                print(item)
            print('\n')
            '''
            # Almacena los resultados de cada split en diccionarios globales
            for j in range(self.n_labels):
                self.precision[i][j] = reports[str(j)]['precision']
                self.recall[i][j] = reports[str(j)]['recall']
                self.f1_score[i][j] = reports[str(j)]['f1-score']
            self.micro_avg[i]['precision'] = reports['micro avg']['precision']
            self.micro_avg[i]['recall'] = reports['micro avg']['recall']
            self.micro_avg[i]['f1-score'] = reports['micro avg']['f1-score']
            self.macro_avg[i]['precision'] = reports['macro avg']['precision']
            self.macro_avg[i]['recall'] = reports['macro avg']['recall']
            self.macro_avg[i]['f1-score'] = reports['macro avg']['f1-score']
        self.f1_avg = self.getDictAverage(self, self.micro_avg, 'f1-score')
        '''
        # Imprime por pantalla los valores almacenados en diccionarios globales
        for i in range(self.k_fold):
            for j in range(self.n_labels):
                print('Clase {}: Precision {:.4f}\tRecall {:.4f}\tF(1)-Score {:.4f}'.format(j, self.precision[i][j], self.recall[i][j], self.f1_score[i][j]))
            print('Micro Avg: Precision {:.4f}\tRecall {:.4f}\tF(1)-Score {:.4f}'.format(self.micro_avg[i]['precision'], self.micro_avg[i]['recall'], self.micro_avg[i]['f1-score']))
            print('Macro Avg: Precision {:.4f}\tRecall {:.4f}\tF(1)-Score {:.4f}'.format(self.macro_avg[i]['precision'], self.macro_avg[i]['recall'], self.macro_avg[i]['f1-score']), end='\n\n')
        print('F(1)-Score Micro Avg: {:.4f}'.format(self.f1_avg), end='\n\n')
        '''


    # Crea n splits de datos según el valor de kfold
    def getDataSplit(self, att, target):
        X_train, X_test, y_train, y_test  = [], [], [], []
        kf = KFold(n_splits=self.k_fold)
        kf.get_n_splits(att)
        for train_index, test_index in kf.split(att):
            _X_train, _X_test, _y_train, _y_test  = [], [], [], []
            # print("TRAIN:\n" + str(train_index) + "\nTEST:\n" + str(test_index) + "\n\n")
            # Creación de lista con el split de entrenamiento
            for _train_index in train_index:
                _X_train.append(att[_train_index])
                _y_train.append(target[_train_index])
            # Creación de lista con el split de prueba (target para posterior evaluación)
            for _test_index in test_index:
                _X_test.append(att[_test_index])
                _y_test.append(target[_test_index])
            X_train.append(_X_train)
            X_test.append(_X_test)
            y_train.append(_y_train)
            y_test.append(_y_test)
        return np.array(X_train), np.array(X_test), np.array(y_train), np.array(y_test)


    # Determina la clase de la predicción de acuerdo a la clase con la mayor probabilidad
    def getBinaryPredictions(self, y_score):
        y_score = y_score.tolist()
        for i in range(len(y_score)):
            target_value = y_score[i].index(max(y_score[i]))
            for j in range(self.n_labels):
                if target_value == j:
                    y_score[i][j] = int(1)
                else:
                    y_score[i][j] = int(0)
        return np.array(y_score)


    # Guarda el modelo predictivo y su desempeño
    def saveModel(self, clf):
        try:
            dump(clf, 'output/clf.joblib')
            with open('output/clf_performance.csv', 'w', encoding='utf-8') as out:
                out.write('sep=;\nF(1)-Score Micro Average;{}'.format(self.f1_avg))
                self.averageAllDicts(self)
                for i in range(self.k_fold + 1):
                    out.write('\n\n===============================================================================================\n\n')
                    if i < self.k_fold:
                        out.write('Split {};Precision;Recall;F(1)-Score\n'.format(i+1))
                    else:
                        out.write('All Splits;Precision;Recall;F(1)-Score\n')
                    for j in range(self.n_labels):
                        # print('Split {} - Clase {}:\nPrecision:{}\nRecall:{}\nF(1)-Score:{}'.format(i+1, j, self.precision[i][j], self.recall[i][j], self.f1_score[i][j]), end='\n\n')
                        out.write('{};{};{};{}\n'.format(self.labels[j], self.precision[i][j], self.recall[i][j], self.f1_score[i][j]))
                    out.write('Micro Avg;{};{};{}\nMacro Avg;{};{};{}'.format(self.micro_avg[i]['precision'], self.micro_avg[i]['recall'], 
                        self.micro_avg[i]['f1-score'], self.macro_avg[i]['precision'], self.macro_avg[i]['recall'], self.macro_avg[i]['f1-score']))
        except FileNotFoundError:
            print('No se ha podido escribir a la ruta output/. El modelo no será guardado')


    # Promedia el valor de todos los diccionarios de evaluación y los almacena en la key [self.k_fold+1]
    def averageAllDicts(self):
        _precision, _recall, _f1_score = [], [], []
        for i in range(self.n_labels):
            _precision.append(self.getDictAverage(self, self.precision, i))
            _recall.append(self.getDictAverage(self, self.recall, i))
            _f1_score.append(self.getDictAverage(self, self.f1_score, i))
        _micro_avg_p = self.getDictAverage(self, self.micro_avg, 'precision')
        _micro_avg_r = self.getDictAverage(self, self.micro_avg, 'recall')
        _macro_avg_p = self.getDictAverage(self, self.macro_avg, 'precision')
        _macro_avg_r = self.getDictAverage(self, self.macro_avg, 'recall')
        _macro_avg_f1 = self.getDictAverage(self, self.macro_avg, 'f1-score')
        self.precision[self.k_fold] = dict()
        self.recall[self.k_fold] = dict()
        self.f1_score[self.k_fold] = dict()
        self.micro_avg[self.k_fold] = dict()
        self.macro_avg[self.k_fold] = dict()
        for i in range(self.n_labels):
            self.precision[self.k_fold][i] = _precision[i]
            self.recall[self.k_fold][i] = _recall[i]
            self.f1_score[self.k_fold][i] = _f1_score[i]
        self.micro_avg[self.k_fold]['precision'] = _micro_avg_p
        self.micro_avg[self.k_fold]['recall'] = _micro_avg_r
        self.micro_avg[self.k_fold]['f1-score'] = self.f1_avg
        self.macro_avg[self.k_fold]['precision'] = _macro_avg_p
        self.macro_avg[self.k_fold]['recall'] = _macro_avg_r
        self.macro_avg[self.k_fold]['f1-score'] = _macro_avg_f1


    # Promedia el valor del diccionario de entrada según el valor de k_fold
    def getDictAverage(self, dictEval, itemToAvg):
        avg = float(0)
        for _ , value in dictEval.items():
            # print(_, '|', value, end='\n\n')
            avg += value[itemToAvg]
        return float(avg/self.k_fold)


    # Predice riesgos en Alto(0), Medio(1), Bajo(2)
    def predictRisk(self, data):
        _data = list(data)
        # Elimina de la data la ID y fecha
        for i in range(len(_data)):
            _data[i] = _data[i][2:]
        predictions = self.classifier.predict(_data)
        return predictions
    

    # Escribe los resultados a un archivo JSON para la posterior lectura de ComuniTree
    @staticmethod
    def writeToJSONFile(data, predictions):
        _json = []
        _predictions = []
        _id = data[0][0]
        _len = len(data)
        for i in range(_len):
            if i + 1 == _len or _id != data[i][0]:
                _json.append({'id': _id, 'prediction': _predictions})
                _id = data[i][0]
                _predictions = []
            if predictions[i] == "2":
                prediction_value = "Bajo"
            elif predictions[i] == "1":
                prediction_value = "Medio"
            else:
                prediction_value = "Alto"
            _predictions.append({'date': data[i][1], 'risk': prediction_value})
        with open("output/predictions.json", "w") as outfile:
            json.dump(_json, outfile, indent=2)


    # Compara entre dos modelos y decide si el nuevo se guarda. Retorna el grado de mejora o empeoramiento
    def compareModels(self):
        if float(self.f1_avg - self.getSavedModelPerformance()) > 0:
            return True
        return False