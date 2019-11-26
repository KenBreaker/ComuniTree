from data_module import DataHandler
from prediction_module import Predictor


def trainModel():
    print("ke ago aki jaajaj k loke")


def predictData():
    data = prepareData()
    Predictor(data)


# Fuzzifica y preprocesa la data
def prepareData():
    data = DataHandler()
    # data.printForecastInfo()
    data.fuzzifyData()
    return data.preprocessData()


trainModel()
predictData()