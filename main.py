from data_module import DataHandler
from prediction_module import Predictor
import sys


def improveModel():
    print("Iniciando generación de nuevo modelo...")
    (changed, improvement) = Predictor.generateNewModel()
    if changed:
        print("Nuevo modelo guardado (+" + "{0:.2f}".format(float(improvement*100)) + "% de mejora)")
    elif improvement == float(0):
        print("Nuevo modelo no guardado (0.00% de mejora)")
    else:
        print("Nuevo modelo no guardado (-" + "{0:.2f}".format(float(improvement*100*(-1))) + "% de mejora)")


def predictData():
    data = prepareData()
    print("Iniciando predicción...")
    Predictor(data)
    print("Predicción finalizada.")


# Fuzzifica y preprocesa la data
def prepareData():
    print("Preparando datos para predicción...")
    data = DataHandler()
    # data.printForecastInfo()
    data.fuzzifyData()
    print("Datos listos.")
    return data.preprocessData()


argv_length = len(sys.argv)
if argv_length == 1:
    predictData()
elif argv_length == 2 and sys.argv[1] == '--improve':
    improveModel()
else:
    print("usage: python main.py [|--improve]")