from data_module import DataHandler
from prediction_module import Predictor
import sys
import time


# Corre la función de mejor de modelo n veces y calcula el promedio de F(1)-Score del promedio de todos los modelos
def improveModel(test_amount):
    f1_avg, f1_highest = float(0), float(0)
    old_f1_avg = Predictor.getSavedModelPerformance()
    printEstimatedTime(test_amount)
    for i in range(test_amount):
        print('Generando nuevos modelos ({}/{})'.format(i+1,test_amount), end='\r', flush=True)
        _f1_aux = Predictor.generateNewModel()
        f1_avg += _f1_aux
        if _f1_aux > f1_highest:
            f1_highest = _f1_aux
    f1_avg = float(f1_avg/test_amount)
    improv_highest = float((f1_highest - old_f1_avg)*100)
    improv_avg = float((f1_avg - old_f1_avg)*100)
    print("Finalizada generación de nuevos modelos ({}/{})\nF(1)-Score máximo: {:.4f} ({:.2f}%)\nF(1)-Score promedio: {:.4f} ({:.2f}%)".format(
        test_amount, test_amount, f1_highest, improv_highest, f1_avg, improv_avg))
    print('Nuevo modelo guardado') if f1_highest > old_f1_avg else print('No se ha guardado un nuevo modelo.')


# Estima el tiempo de ejecución para la generación de nuevos modelos
def printEstimatedTime(test_amount):
    start = time.time()
    Predictor.generateNewModel()
    estimatedTime = (time.time() - start) * test_amount
    hour = int(estimatedTime / 3600)
    minute = int((estimatedTime - 3600 * hour) / 60)
    second = int(estimatedTime - 3600 * hour - 60 * minute)
    print('Tiempo estimado para {} modelos: {}hr {}min {}seg'.format(test_amount, hour, minute, second))


# Prepara la data (preprocesamiento y fuzzificación) y predice
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


# Chequea si un string es número
def checkStringToInt(valueToCheck, allowNegative=True):
    try:
        value = int(valueToCheck)
        if not allowNegative and value <= 0:
            return False
        return True
    except ValueError:
        return False


start = time.time()
argv_length = len(sys.argv)
if argv_length == 1:
    predictData()
elif argv_length == 3 and sys.argv[1] == '-i' and checkStringToInt(sys.argv[2], allowNegative=False):
    improveModel(int(sys.argv[2]))
elif argv_length == 2 and sys.argv[1] == '-i':
    improveModel(200)
else:
    print("usage: python main.py [|-i] [|{1,2...n}]")
print('\nTiempo de ejecución: {:.2f} seg'.format(time.time() - start))