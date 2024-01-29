import serial
from vpython import *
import time
import requests
# ------------------------server-----------------------------
import socket

# Define the IP address and port to bind the server
HOST = '0.0.0.0'  # Replace with the desired IP address
PORT = 8080  # Replace with the desired port number

def run_server():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server_socket:
        # Bind the server socket to the specified IP address and port
        server_socket.bind((HOST, PORT))

        # Listen for incoming connections
        server_socket.listen()

        print(f"Server running on {HOST}:{PORT}")

        # Accept incoming connections
        client_socket, client_address = server_socket.accept()
        print(f"Connection from {client_address}")

        # Receive data from the client
        data = client_socket.recv(1024)
        print(f"Received data: {data.decode('utf-8')}")

        # Close the client socket
        client_socket.close()

# Run the server
run_server()
# ------------------------server-----------------------------

arduinoData = serial.Serial('com12', 115200)
time.sleep(1)

#send command to arduino
while True:
    # Sending data from py to arduino
    if recievedCmd == "scanUser": #string that is gonna be recieved for the backend when requesting user Id by scanning finger
        recievedCmd = recievedCmd +'\r'
        arduinoData.write(recievedCmd.encode())

        while (arduinoData.inWaiting()==0):
            pass
        data = arduinoData.readline()
        data = str(data,'utf-8')
        data = data.strip('\r\n')
        print(data)

        endPoint = "http://10.6.156.26:8000/login/api/token/"
        request = requests.post(endPoint, json={"data":data})


    elif recievedCmd == "register":
        recievedCmd = recievedCmd + '\r'
        arduinoData.write(recievedCmd.encode()) #informed arduino to register
        # wait a little and send the 'id'
        


    else: 
        print("Unknow command text from the backend, please check typo")
    