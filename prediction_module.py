from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import precision_recall_fscore_support
from sklearn.model_selection import KFold
from sklearn import tree
from joblib import dump, load
import json
import numpy as np

class Predictor:
    # Clasificador y datos
    clf_algorithm = tree.DecisionTreeClassifier()       # Algoritmo que se utiliza para crear un modelo
    labels = ['0','1','2']                              # Nombre y cantidad de las etiquetas/clases/target
    
    # Flags
    f_new = False                                       # Bandera para saber si el modelo generado es nuevo o no

    # Variable y resultados de métricas de evaluación de rendimiento
    k_fold = 10                                         # Cantidad de splits que se harán para k-fold Cross Validation
    precision = []                                      # Precision de cada clase (0,1,2) y promedio de todas
    recall = []                                         # Recall de cada clase (0,1,2) y promedio de todas
    f1_score = []                                       # F(1)-Score de cada clase (0,1,2) y promedio de todas

    # Constructor para predicción
    def __init__(self, data):
        self.classifier = self.getPredictiveModel()
        if(self.f_new):
            self.saveModel(self.classifier)
        self.predictions = self.predictRisk(data)
        self.writeToJSONFile(data, self.predictions)


    # Constructor para generar nuevo modelo basado en nueva data
    @classmethod
    def generateNewModel(self) -> 'Predictor':
        self.classifier = self.trainModel(self)
        self.compareModels(self, self.classifier)


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
        attributes, target = self.readTrainingData()
        self.evaluateModel(attributes, target)
        clf = self.clf_algorithm.fit(attributes, target)
        return clf


    @staticmethod
    def readTrainingData():
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
        return np.array(attributes), np.array(target)


    # Evalua un clasificador con F(1)-Score y k-fold Cross Validation
    def evaluateModel(self, att, target):
        rows_train, rows_test, target_train, target_test = [], [], [], []
        kf = KFold(n_splits=self.k_fold)
        kf.get_n_splits(att)
        for train_index, test_index in kf.split(att):
            # print("TRAIN:\n" + str(train_index) + "\nTEST:\n" + str(test_index) + "\n\n")
            # Creación de lista con el split de entrenamiento
            for _train_index in train_index:
                rows_train.append(att[_train_index])
                target_train.append(target[_train_index])
            # Creación de lista con el split de prueba (target para posterior evaluación)
            for _test_index in test_index:
                rows_test.append(att[_test_index])
                target_test.append(target[_test_index])
            clf = self.clf_algorithm.fit(np.array(rows_train), np.array(target_train))
            # Valores de las métricas en array multidimensional. Necesario ordenar con función listPredictResults
            self.listPredictionResults(precision_recall_fscore_support(target_test, clf.predict(rows_test), average=None, labels=self.labels), len(self.labels))


    # Ordena resultados de métricas de evaluación para mejor comprensión
    def listPredictionResults(self, results, n_label):
        p, p_avg = [], float(0)             # Lista auxiliar para precision de cada clase y su promedio
        r, r_avg = [], float(0)             # Lista auxiliar para recall de cada clase y su promedio
        f, f_avg = [], float(0)             # Lista auxiliar para f(1)-score de cada clase y su promedio
        for _p in results[0]:
            value = float(_p)
            p.append(value)
            p_avg += value
        p.append(float(p_avg/n_label))
        self.precision.append(p)
        for _r in results[1]:
            value = float(_r)
            r.append(value)
            r_avg += value
        r.append(float(r_avg/n_label))
        self.recall.append(r)
        for _f in results[2]:
            value = float(_f)
            f.append(value)
            f_avg += value
        f.append(float(f_avg/n_label))
        self.f1_score.append(f)


    # Guarda el modelo predictivo y su desempeño
    def saveModel(self, clf):
        try:
            dump(clf, 'output/clf.joblib')
            file = open("output/clf_performance.csv", "w", encoding='utf-8')
            file.write("sep=;\nSplit;Precision;Recall;F(1)-Score\n")
            p_avg, r_avg, f_avg = float(0), float(0), float(0)
            n_label = len(self.labels)                              # Posición del promedio por split
            for i in range(self.k_fold):
                file.write(str(i+1) + ";" + str(self.precision[i]) + ";" + str(self.recall[i]) + ";" + str(self.f1_score[i]) + "\n")
                p_avg += self.precision[i][n_label]
                r_avg += self.recall[i][n_label]
                f_avg += self.f1_score[i][n_label]
            file.write('Avg;' + str(float(p_avg/self.k_fold)) + ';' + str(float(r_avg/self.k_fold)) + ';' + str(float(f_avg/self.k_fold)))
            file.close()
        except FileNotFoundError:
            print("No se ha podido escribir a la ruta output/. El modelo no será guardado")
        

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


    # Compara entre dos modelos y almacena el mejor
    def compareModels(self, clf):
        try: 
            clf_old = load('output/rfc.joblib')
        except FileNotFoundError:
            print("No existe modelo para mejorar. Se guardará el generado actualmente")
            dump(clf,'output/rfc.joblib')
            exit(0)
        clf = self.trainModel()
