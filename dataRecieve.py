import serial
from vpython import *
import time
import requests

# ------------------------server-----------------------------
# import socket

# # Define the IP address and port to bind the server
# HOST = '0.0.0.0'  # Replace with the desired IP address
# PORT = 8080  # Replace with the desired port number

# def run_server():
#     with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server_socket:
#         # Bind the server socket to the specified IP address and port
#         server_socket.bind((HOST, PORT))

#         # Listen for incoming connections
#         server_socket.listen()

#         print(f"Server running on {HOST}:{PORT}")

#         # Accept incoming connections
#         client_socket, client_address = server_socket.accept()
#         print(f"Connection from {client_address}")

#         # Receive data from the client
#         data = client_socket.recv(1024)
#         print(f"Received data: {data.decode('utf-8')}")

#         # Close the client socket
#         client_socket.close()

# # Run the server
# run_server()
# ------------------------server-----------------------------


arduinoData = serial.Serial('com12', 115200)
time.sleep(1)

#send command to arduino
endPoint = "http://10.6.156.26:8000/login/api/token/"

terminate = "Done"
terminate = terminate + '\r'

while True:
    # time.sleep(5)
# Take the data from backend and saveit to 'revievedCmd' here
    recievedCmd = input("Enter command: ")

    # Sending data from py to arduino
    if recievedCmd == "scanUser": #string that is gonna be recieved for the backend when requesting user Id by scanning finger
        print("Recieved: " + recievedCmd)
        recievedCmd = recievedCmd +'\r'
        arduinoData.write(recievedCmd.encode())

        while True:
            isNum = False
            while (arduinoData.inWaiting()==0):
                pass
            data = arduinoData.readline()
            data = str(data,'utf-8')
            data = data.strip('\r\n')
            print(data)
            
            try:
                val = int(data)
                isNum = True
            except:
                isNum = False

            if (isNum == True) or (data == "NoMatch"):
                isNum = False
                arduinoData.write(terminate.encode())
                break
        



        # request = requests.post(endPoint, json={"data":data})

# 'receivedCmd is separated to command and id
# command saved in the same variable name and id saved in a variable name id.
# You may do this above operation at the beginning of the above main loop
# that may make things applicable for both conditions above and below
    id="120"

    if recievedCmd == "register":
        count = 0
        print("Recieved: " + recievedCmd)
        recievedCmd = recievedCmd + '\r'
        arduinoData.write(recievedCmd.encode()) #informed arduino to register
        # wait a little and send the 'id'
        while True:
            count +=1
            print(count, end=" ")
            while (arduinoData.inWaiting()==0):
                    pass
            data = arduinoData.readline()
            data = str(data,'utf-8')
            data = data.strip('\r\n')
            print(data)

            if(data == "Ready to enroll a fingerprint!"):
                arduinoData.write(id.encode())
            if (data == "Stored!") or (count == 1000) or (data == "Error"):
                arduinoData.write(terminate.encode())
                break


    # else: 
    #     print("Unknow command text from the backend, please check typo")
    