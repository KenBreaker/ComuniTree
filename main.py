from data_module import DataHandler
from prediction_module import Predictor


def predictData():
    data = DataHandler()
    # data.printForecastInfo()
    data.fuzzifyData()
    preprocessedData = data.preprocessData()
    Predictor(preprocessedData)


def trainModel():
    print("ke ago aki jaajaj k loke")


trainModel()
predictData()