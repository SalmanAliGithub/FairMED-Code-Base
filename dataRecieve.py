import serial
from vpython import *
import time
import requests

# ------------------------server-----------------------------
import socket
import json

# Define the IP address and port to bind the server
HOST = '0.0.0.0'  # Replace with the desired IP address
PORT = 8080  # Replace with the desired port number
recievedCmd = ""

def run_server():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server_socket:
        server_socket.bind((HOST, PORT))
        server_socket.listen()

        print(f"Server running on {HOST}:{PORT}")

        while True:  # Continuously accept connections
            client_socket, client_address = server_socket.accept()
            print(f"Connection from {client_address}")

            data = client_socket.recv(1024)
            if not data:
                break  # If no data received, break the loop

            received_data = data.decode('utf-8')
            print(f"Received data: {received_data}")

            # Assuming the received data is in JSON format
            try:
                # Parse the JSON data
                json_data = json.loads(received_data)

                # Access specific fields
                recievedCmd = json_data.get("recievedCmd", "NoCmd")


                # Convert the modified data back to a JSON string
                # modified_data_str = json.dumps(modified_data)

                # response = f"HTTP/1.1 200 OK\r\nContent-Type: application/json\r\n\r\n"
                # response += f'{{"message": "Data received and modified successfully!", "field_value": "{field_value}"}}'

                # Send the response back to the client
                # client_socket.sendall(response.encode('utf-8'))

            except json.JSONDecodeError as e:
                # Handle the case where the received data is not a valid JSON
                print(f"Error decoding JSON: {e}")
                response = "HTTP/1.1 400 Bad Request\r\nContent-Type: text/plain\r\n\r\nInvalid JSON format"
                client_socket.sendall(response.encode('utf-8'))

            # Close the client socket after sending the response
            client_socket.close()

# Run the server
run_server()
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
    