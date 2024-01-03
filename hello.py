import serial
from vpython import *
import time

arduinoData = serial.Serial('com12', 115200)
time.sleep(1)

while True:
    while (arduinoData.inWaiting()==0):
        pass
    data = arduinoData.readline()
    print(data)