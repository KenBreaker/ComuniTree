from data_module import DataHandler
from prediction_module import Predictor
import sys


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

# Corre la función de mejor de modelo n veces y calcula el promedio de F(1)-Score del promedio de todos los modelos
def runImproveMethod(test_amount):
    f1_avg, f1_highest = float(0), float(0)
    for i in range(test_amount):
        f1_aux = improveModel()
        f1_avg += f1_aux
        if f1_aux > f1_highest:
            f1_highest = f1_aux
    print('\nF(1)-Score promedio de las', test_amount, 'ejecuciones:', float(f1_avg/test_amount))
    print('F(1)-Score máxima de las', test_amount, 'ejecuciones:', f1_highest, '\n')

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


argv_length = len(sys.argv)
if argv_length == 1:
    predictData()
elif argv_length == 2 and sys.argv[1] == '--improve':
    runImproveMethod(200)
else:
    print("usage: python main.py [|--improve]")