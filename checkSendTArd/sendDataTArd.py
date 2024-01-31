import serial
from vpython import *
import time
import requests

arduinoData = serial.Serial('com12', 115200)
time.sleep(1)

#send command to arduino

while True:
        recievedCmd = str(input("On/Off: "))
        recievedCmd = recievedCmd +'\r'
        arduinoData.write(recievedCmd.encode())

        while (arduinoData.inWaiting()==0):
            pass
        data = arduinoData.readline()
        data = str(data,'utf-8')
        data = data.strip('\r\n')
        print(data)