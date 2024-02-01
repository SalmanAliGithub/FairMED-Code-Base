import requests

# ------------------------server-----------------------------
import socket
import json

# Define the IP address and port to bind the server
HOST = '0.0.0.0'  # Replace with the desired IP address
PORT = 8080  # Replace with the desired port number

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
# endPoint = "http://10.6.220.132:8000/login/api/token/"

# response = requests.get(endPoint)

# if response.status_code == 200:
#     data_from_backend = response.json()  # Assuming the response is in JSON format
#     print("Data from backend:", data_from_backend)
# else:
    # print("Error:", response.status_code)