import json
import requests
import urllib
from urllib.parse import quote, urlencode
from pprint import pprint

api_token = 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI'
api_url_base = 'https://maps.googleapis.com/maps/api/geocode/json?address='

lugar = input()
lugar = {'address': lugar}

address = urlencode(lugar)

key = {'key': api_token}
key = urlencode(key)

api_url_base += address + '&' + key

response = requests.get(api_url_base)

if response:
	#print(response.status_code)
	json_response = json.loads(response.content.decode('utf-8'))
	pprint(json_response.items())
	#for key,value in json_response.items():
	#	print("key: {key} | value: {value}".format(key=key, value=value))
else:
	print("Ups! Algo salio mal!!")

