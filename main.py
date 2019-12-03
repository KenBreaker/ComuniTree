from data_module import DataHandler
from prediction_module import Predictor
import sys
import time

'''
# Intenta mejorar el modelo con la data almacenada en input/
def improveModel():
    print("Iniciando generación de nuevo modelo...")
    (changed, improvement, f1_avg) = Predictor.generateNewModel()
    if changed:
        print("Nuevo modelo guardado (+" + "{0:.2f}".format(float(improvement*100)) + "% de mejora)")
    elif improvement == float(0):
        print("Nuevo modelo no guardado (0.00% de mejora)")
    else:
        print("Nuevo modelo no guardado (-" + "{0:.2f}".format(float(improvement*100*(-1))) + "% de mejora)")
    return f1_avg
'''

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
    print ('Nuevo modelo guardado') if f1_highest > old_f1_avg else print('No se ha guardado un nuevo modelo.')


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


start = time.time()
argv_length = len(sys.argv)
if argv_length == 1:
    predictData()
elif argv_length == 2 and sys.argv[1] == '--improve':
    improveModel(8000)
else:
    print("usage: python main.py [|--improve]")
print('\nTiempo de ejecución: {:.2f} seg'.format(time.time() - start))