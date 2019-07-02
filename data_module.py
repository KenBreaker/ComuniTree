import numpy as np
import requests
import json
import sys


class DataHandler(object):
    def __init__(self, ):
        self.forecast = self.getWeatherInfo()                               # Se guardará info. relevante del clima
        # self.trees = self.getTreesInfo(sys.argv[1], sys.argv[2])          # Se guardará info. de los árboles
        self.trees = self.getTreesInfo(sys.argv[1])

    # Retorna la información del clima según Open Weather Map
    def getWeatherInfo(self):
        URL = "http://api.openweathermap.org/data/2.5/forecast"             # Open Weather Map API Endpoint
        city_id = "3871336"                                                 # Código de la ciudad. Santiago, Chile = 3871336
        api_key = "5319c68eecd8e62e6d5a8e9f891d108e"                        # Open Weather Map API key
        PARAMS = {'id': city_id, 'APPID': api_key, 'units': 'metric'}       # Definición de parámetros para enviar a la API
        data = requests.get(url=URL, params=PARAMS).json()                  # Guardando valor de la petición GET en formato JSON en la variable data
        forecast_days = 5                                                   # Cantidad de días en el pronóstico que retorna la API
        forecast_per_day = 8                                                # Cantidad de pronósticos por día (3 forecast/hr = 8 forecast/day) que retorna la API

        forecast = []
        try:
            # Al haber {{forecast_per_day}} reportes por día, es necesario juntarlos todo en uno con los valores máximos entre cada uno
            for i in range(0, forecast_days * forecast_per_day, forecast_per_day):
                forecast.append(self.forecastPerDay(data['list'], i, i+forecast_per_day))
        except KeyError:
            print("Error " + str(data['cod']) + ": " + str(data['message']))
            exit(-1)
        return forecast

    # Retorna la información de los árboles entregada por argumentos ARGV
    #def getTreesInfo(self, trees_path, reports_path):
    def getTreesInfo(self, trees_path):
        trees = []
        try:
            #reportFile = open(reports_path, "r", encoding='utf-8')
            treeFile = open(trees_path, "r", encoding='utf-8')
            #reportData = json.load(reportFile)
            treeData = json.load(treeFile)
            #reportFile.close()
            treeFile.close()

            for tree in treeData['data']:
                idTree = int(tree['id'])
                height = int(tree['size'])      # CAMBIAR EN BACKEND POR HEIGHT
                diameter = int(tree['circumference'])      # CAMBIAR EN BACKEND POR DIAMETER
                trees.append({'id': idTree, 'height': height, 'diameter': diameter})
        except FileNotFoundError:
            print("Alguno (o ambos) de los archivos no existe:\n\t" + trees_path)
            #print("Alguno (o ambos) de los archivos no existe:\n\t" + trees_path + "\n\t" + reports_path)
            exit(-1)
        return trees

    # Registra y retorna los máximos valores dentro de los pronósticos de un día
    def forecastPerDay(self, forecastList, ini_pos, end_pos):
        # Registro inicial
        temp_max = float(forecastList[ini_pos]['main']['temp_max'])
        wind_speed = float(forecastList[ini_pos]['wind']['speed'])
        humidity = int(forecastList[ini_pos]['main']['humidity'])
        weather_type = [0 for i in range(6)]
        weather_type[self.indexOfWeatherType(forecastList[ini_pos]['weather'][0]['main'])] += 1
        date = forecastList[ini_pos]['dt_txt'].split(" ")[0]

        # Evaluando los máximos en cada iteración
        for i in range(ini_pos + 1, end_pos):
            # Registro de los valores en iteración
            _temp_max = float(forecastList[i]['main']['temp_max'])
            _wind_speed = float(forecastList[i]['wind']['speed'])
            _humidity = int(forecastList[i]['main']['humidity'])
            weather_type[self.indexOfWeatherType(forecastList[ini_pos]['weather'][0]['main'])] += 1
            if temp_max < _temp_max:
                temp_max = _temp_max
            if wind_speed < _wind_speed:
                wind_speed = _wind_speed
            if humidity < _humidity:
                humidity = _humidity
        return {'date': date,
                'humidity': humidity,
                'weather_type': weather_type.index(max(weather_type)),
                'max_temp': temp_max,
                'wind_speed': wind_speed}

    # Retorna la posición del elemento correspondiente según el pronóstico
    @staticmethod
    def indexOfWeatherType(weather_type_str):
        weather_type_str = weather_type_str.lower()
        if weather_type_str == "thunderstorm":
            return 0
        if weather_type_str == "drizzle":
            return 1
        if weather_type_str == "rain":
            return 2
        if weather_type_str == "snow":
            return 3
        if weather_type_str == "clear":
            return 4
        if weather_type_str == "clouds":
            return 5
        return -1

    # Fuzzifica los valores según los fuzzy sets establecidos y la función triangular de membresía
    def fuzzifyData(self):
        heights = [[1219, 2438, 5000], [609, 1219, 1829], [0, 609, 914]]                                # (cm) Alto, medio, bajo
        diameters = [[36, 66, 200], [15, 36, 51], [0, 15, 26]]                                          # (cm) Ancho, medio, delgado
        humidities = [[60, 80, 100], [30, 60, 70], [0, 30, 45]]                                         # (%) Alta, media, baja
        temps = [[21, 33, 50], [6, 21, 27], [0, 6, 14]]                                                 # (°C) Hot, tempered, cold
        wind_speeds = [[33.1, 49.6, 60.0], [15.0, 33.1, 41.4], [2.2, 15.0, 24.1], [0, 2.2, 8.7]]        # (mps) Very strong, strong, medium, calm
        # Transforma los valores leídos previamente a su versión fuzzificada
        for tree in self.trees:
            tree['height'] = self.getMaxLikelihoodValue(tree['height'], heights)
            tree['diameter'] = self.getMaxLikelihoodValue(tree['diameter'], diameters)
        for day in self.forecast:
            day['humidity'] = self.getMaxLikelihoodValue(day['humidity'], humidities)
            day['max_temp'] = self.getMaxLikelihoodValue(day['max_temp'], temps)
            day['wind_speed'] = self.getMaxLikelihoodValue(day['wind_speed'], wind_speeds)

    # Retorna la variable categórica con el mayor grado de pertenencia para el valor de entrada
    def getMaxLikelihoodValue(self, value, choices):
        degree = []
        # Almacena el grado de pertenencia para cada fuzzy set
        for choice in choices:
            degree.append(self.triangular(value, *choice))
        return degree.index(max(degree))

    # Retorna el grado de pertenencia de una variable X a una variable categórica ordinal, según función triangular
    def triangular(self, x, a, b, c):
        return max(min((x - a) / (b - a), (c - x) / (c - b)), 0)

    # Retorna la data preprocesada y estructurada para predecir
    def preprocessData(self):
        data = []
        for tree in self.trees:
            for day in self.forecast:
                row = []
                row.append(tree['id'])
                row.append(day['date'])
                row.append(tree['height'])
                row.append(tree['diameter'])
                row.append(0)                       # Cable_proximity
                row.append(0)                       # Plague
                row.append(day['humidity'])
                row.append(day['weather_type'])
                row.append(day['max_temp'])
                row.append(day['wind_speed'])
                data.append(row)
        return data

    # Imprime por consola el detalle de los pronósticos en formato JSON
    def printForecastInfo(self):
        print("=================FORECAST=================" + json.dumps(self.forecast, indent=2) + "\n")

    # Imprime por consola el detalle de cada árbol en formato JSON
    def printTreesInfo(self):
        print("=================TREES=================" + json.dumps(self.trees, indent=2) + "\n")

    def getForecast(self):
        return self.forecast

    def getTrees(self):
        return self.trees
