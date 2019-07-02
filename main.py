from data_module import DataHandler
from prediction_module import Predictor


def predictData():
    data = DataHandler()
    data.fuzzifyData()
    data = data.preprocessData()
    predictions = Predictor(data)


def trainModel():
    print("ke ago aki jaajaj k loke")


trainModel()
predictData()