from sklearn.ensemble import RandomForestClassifier
from sklearn import tree
from joblib import dump, load
import json

class Predictor:
    def __init__(self, data):
        self.classifier = self.getPredictiveModel()
        self.predictions = self.predictRisk(data)
        self.writeToJSONFile(data, self.predictions)

    # Carga un modelo predictivo o lo crea en caso de no existir
    def getPredictiveModel(self):
        try:
            clf = load('output/rfc.joblib')
        except FileNotFoundError:
            clf = self.trainModel()
        return clf
    
    # Crea un árbol de decisión según el dataset provisto
    @staticmethod
    def trainModel():
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
        clf = tree.DecisionTreeClassifier().fit(attributes, target)
        dump(clf, 'output/rfc.joblib')
        return clf

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
