import requests
import json
import skfuzzy as fuzz
import numpy as np
from skfuzzy import control as ctrl


class DataHandler(object):
    def __init__(self):
        self.forecast = self.getWeatherInfo()                               # Se guardará info. relevante del clima
        self.trees = self.getTreesInfo()                                    # Se guardará info. de los árboles


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
    @staticmethod
    def getTreesInfo():
        trees = []
        treeURL = "http://35.247.252.59:8080/arbol/all/"                   # ComuniTree Árboles JSON
        reportURL = "http://35.247.252.59:8080/api/v1/reports/list/"       # ComuniTree Reporte de árboles JSON
        treeData = requests.get(url=treeURL).json()
        reportData = requests.get(url=reportURL).json()

        # Almacena el contenido leído de la información de los árbol en la variables trees
        for tree in treeData['data']:
            idTree = int(tree['id'])
            height = int(tree['size'])     # CAMBIAR EN BACKEND POR HEIGHT
            diameter = int(int(tree['circumference']) / 3.141593)
            trees.append({'id': idTree, 'height': height, 'diameter': diameter, 'cable_proximity': 0, 'plague': False})

        # Cuenta la cantidad de veces que se ha reportado un item (proximidad al cable o plaga) para cada árbol
        _report = {}
        for report in reportData:
            if report['tree']['id'] not in _report:
                _report[report['tree']['id']] = [0 for x in range(4)]
            if report['cable_proximity'] == 0:
                _report[report['tree']['id']][0] += 1
            elif report['cable_proximity'] == 1:
                _report[report['tree']['id']][1] += 1
            else:
                _report[report['tree']['id']][2] += 1
            if report['plague']:
                _report[report['tree']['id']][3] += 1
            else:
                _report[report['tree']['id']][3] -= 1

        # Ingresa a trees los puntos de riesgo por mayoría (proximidad a cableado, plaga) por cada árbol
        for key, value in _report.items():
            for i in range(len(trees)):
                if trees[i]['id'] == key:
                    trees[i]['cable_proximity'] = value.index(max(value[:3]))
                    if value[3] > 0:
                        trees[i]['plague'] = True
                    else:
                        trees[i]['plague'] = False
                    break
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
        # Se establecen los antecedentes
        height = ctrl.Antecedent(np.arange(0, 3049, 1), 'Height')
        diameter = ctrl.Antecedent(np.arange(0, 201, 1), 'Diameter')
        humidity = ctrl.Antecedent(np.arange(0, 101, 1), 'Humidity')
        temperature = ctrl.Antecedent(np.arange(-10, 51, 1), 'Temperature')
        wind_speed = ctrl.Antecedent(np.arange(0, 61, 1), 'Wind speed')

        # Se establecen los rangos
        height['Short'] = fuzz.trapmf(height.universe, [0, 0, 914, 1219])
        height['Medium'] = fuzz.trapmf(height.universe, [914, 1219, 2133, 2438])
        height['Tall'] = fuzz.trapmf(height.universe, [2133, 2438, 3048, 3048])
        # height.view()
        # input("Presione Enter para continuar...")

        diameter['Thin'] = fuzz.trapmf(diameter.universe, [0, 0, 30, 61])
        diameter['Medium'] = fuzz.trapmf(diameter.universe, [30, 61, 91, 121])
        diameter['Wide'] = fuzz.trapmf(diameter.universe, [91, 121, 182, 182])
        # diameter.view()
        # input("Presione Enter para continuar...")

        humidity['Low'] = fuzz.trapmf(humidity.universe, [0, 0, 30, 35])
        humidity['Medium'] = fuzz.trapmf(humidity.universe, [30, 35, 60, 75])
        humidity['High'] = fuzz.trapmf(humidity.universe, [60, 75, 100, 100])
        # humidity.view()
        # input("Presione Enter para continuar...")

        temperature['Cold'] = fuzz.trapmf(temperature.universe, [-10, -10, 6, 15])
        temperature['Tempered'] = fuzz.trapmf(temperature.universe, [6, 15, 27, 33])
        temperature['Hot'] = fuzz.trapmf(temperature.universe, [27, 33, 50, 50])
        # temperature.view()
        # input("Presione Enter para continuar...")

        wind_speed['Calm'] = fuzz.trapmf(wind_speed.universe, [0, 0, 12, 22])
        wind_speed['Mildy strong'] = fuzz.trimf(wind_speed.universe, [12, 37, 42])
        wind_speed['Strong'] = fuzz.trimf(wind_speed.universe, [37, 46, 49])
        wind_speed['Very strong'] = fuzz.trapmf(wind_speed.universe, [46, 53, 69, 69])
        # wind_speed.view()
        # input("Presione Enter para continuar...")

        # Transforma datos de árboles y clima a su valor cualitativo
        for tree in self.trees:
            tree['height'] = self.getFuzzyValue(tree['height'], height)
            tree['diameter'] = self.getFuzzyValue(tree['diameter'], diameter)
            #print('ID: ', tree['id'], '| Height:', tree['height'], '| Diameter:', tree['diameter'])
        for day in self.forecast:
            day['humidity'] = self.getFuzzyValue(day['humidity'], humidity)
            day['max_temp'] = self.getFuzzyValue(day['max_temp'], temperature)
            day['wind_speed'] = self.getFuzzyValue(day['wind_speed'], wind_speed)
            #print('Date:', day['date'], '| Humidity:', day['humidity'], '| Max Temp:', day['max_temp'], '| Wind Speed:', day['wind_speed'])


    # Retorna el valor cualitativo de la variable de entrada
    @staticmethod
    def getFuzzyValue(value, fuzzy_set):
        mf_degrees = []
        for f in fuzzy_set.terms:
            mf_degrees.append(np.interp(value, fuzzy_set.universe, fuzzy_set[f].mf))
        # Invertir la lista porque soy imbécil y puse el dataset con valores descendientes
        mf_degrees.reverse()
        return mf_degrees.index(max(mf_degrees))


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
                row.append(tree['cable_proximity'])
                row.append(tree['plague'])
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
