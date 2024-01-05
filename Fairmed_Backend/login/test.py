import requests

def requ(data):
    endpoint = 'http://10.6.156.61:8080'
    res = requests.post(endpoint, json={'mes':data})

requ('Hey')