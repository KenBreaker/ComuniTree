from data_module import DataHandler
from prediction_module import Predictor
import sys


def improveModel():
    print("Iniciando generación de nuevo modelo")
    changed = Predictor.generateNewModel()
    if changed:
        print("Nuevo y mejor modelo guardado")
    else:
        print("Nuevo modelo no guardado. El anterior es mejor")


def predictData():
    data = prepareData()
    print("Iniciando predicción...")
    Predictor(data)


# Fuzzifica y preprocesa la data
def prepareData():
    print("Preparando datos para predicción...")
    data = DataHandler()
    # data.printForecastInfo()
    data.fuzzifyData()
    return data.preprocessData()


argv_length = len(sys.argv)
if argv_length == 1:
    predictData()
elif argv_length == 2 and sys.argv[1] == '--improve':
    improveModel()
else:
    print("usage: python main.py [|--improve]")