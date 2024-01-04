import serial
from vpython import *
import time

arduinoData = serial.Serial('com12', 115200)
time.sleep(1)

while True:
    while (arduinoData.inWaiting()==0):
        pass
    data = arduinoData.readline()
    data = str(data,'utf-8')
    data = data.strip('\r\n')
    print(data)