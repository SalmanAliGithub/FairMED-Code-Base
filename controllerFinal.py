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

recievedCmd = []

def get_json_data(http_request):
    # Assuming the JSON data is sent in the HTTP body
    try:
        # Split the HTTP request into header and body
        header, body = http_request.split('\r\n\r\n', 1)
        # Parse the body as JSON
        json_data = json.loads(body)
        return json_data
    except (json.JSONDecodeError, ValueError):
        return None


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

            # Extract JSON data from the HTTP request
            json_data = get_json_data(received_data)

            if json_data:
                print("JSON data received:", json_data)
                # Access individual fields like json_data['field_name']

            time.sleep(1)


            recievedCmd = str(json_data.get("recievedCmd", "NoCmd"))
            recievedId = str(json_data.get("id", "NoId"))
            physicianId = str(json_data.get("physicianId", "NoId"))
            pH = str(json_data.get("pH", "pH"))

            print("check inside server: " + recievedId)

            if recievedCmd == "register":
                print([recievedCmd, recievedId])
                return [recievedCmd, recievedId]
                
            elif recievedCmd == "scanUser":
                return [recievedCmd, physicianId, pH]


            response = f"HTTP/1.1 200 OK\r\nContent-Type: application/json\r\n\r\n"
            response += f'{{"message": "Data received and modified successfully!"}}'

            # Send the response back to the client
            client_socket.sendall(response.encode('utf-8'))
            # Close the client socket after sending the response
            client_socket.close()

# Run the server
# run_server()
# ------------------------server-----------------------------


arduinoData = serial.Serial('com12', 115200)
time.sleep(1)

#send command to arduino
endPoint = "http://192.168.133.14:8000/records/fingerprint/"

terminate = "Done"
terminate = terminate + '\r'
# request = requests.post(endPoint, json={"data":"Salman"})
while True:
    # time.sleep(5)
# Take the data from backend and saveit to 'revievedCmd' here
    # recievedCmd = input("Enter command: ")
    recievedCmd = run_server()
    print("return of server: ", end="")
    print(recievedCmd)
    count= 0
    for i in recievedCmd:
        count+=1

    if count == 2:
        recievedCmdUchanged = recievedCmd
        recievedCmd = recievedCmd[0]
        id = recievedCmdUchanged[1]
        print("Check Id: " + id)

    if count == 3:
        recievedCmdUchanged = recievedCmd
        recievedCmd = recievedCmd[0]
        physicianId = recievedCmdUchanged[1]
        
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
                val = str(val)
                request = requests.post(endPoint, json={"patientId":val, "physicianId": physicianId})
            except:
                isNum = False

            if (isNum == True):
                isNum = False
                arduinoData.write(terminate.encode())
                break

            # Notify that there is no matching data
            elif data=="NoMatch":
                arduinoData.write(terminate.encode())
                request = requests.post(endPoint, json={"Error" : "No Matching Fingerprint in the DB"})
                break
        



        # request = requests.post(endPoint, json={"data":data})

# 'receivedCmd is separated to command and id
# command saved in the same variable name and id saved in a variable name id.
# You may do this above operation at the beginning of the above main loop
# that may make things applicable for both conditions above and below

    if recievedCmd == "register":
        # count = 0
        print("Recieved: " + recievedCmd)
        recievedCmd = recievedCmd + '\r'
        arduinoData.write(recievedCmd.encode()) #informed arduino to register
        
        condition = True

        while True:
            # count +=1
            # print(count, end=" ")
            while (arduinoData.inWaiting()==0):
                    pass
            data = arduinoData.readline()
            data = str(data,'utf-8')
            data = data.strip('\r\n')
            print(data)

            if(data == "ReadyToEnrol"):
                arduinoData.write(id.encode())
                condition = False
            elif condition == True:
                print(f"Didn't encode id: {id}")

            if (data == "Stored!"):
                arduinoData.write(terminate.encode())
                break

            elif data == "Error":
                arduinoData.write(terminate.encode())
                request = requests.post(endPoint, json={"Error" : "Fingerprint not saved, scan again!"})
                break


    # else: 
    #     print("Unknow command text from the backend, please check typo")
    