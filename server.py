import socket

# Define the IP address and PORT to bind the server
HOST = '0.0.0.0'  # Replace with the desired IP address
PORT = 8080  # Replace with the desired PORT number

def run_server():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server_socket:
        # Bind the server socket to the specified IP address and PORT
        server_socket.bind((HOST, PORT))

        # Listen for incoming connections
        server_socket.listen()

        # Accept incoming connections
        client_socket, client_address = server_socket.accept()

        # Receive data from the client
        data = client_socket.recv(1024)
        print(f"Received data: {data.decode('utf-8')}")

        # Close the client socket
        client_socket.close()

# Run the server
run_server()

# --------------------------------------------------
import json

# Set up the server
HOST = '0.0.0.0'
PORT = 8080

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind((HOST, PORT))
server_socket.listen(1)

while True:
    client_socket, addr = server_socket.accept()

    data = client_socket.recv(1024).decode('utf-8')

    # Assuming data is a valid JSON
    try:
        json_data = json.loads(data.split('\r\n\r\n')[-1])
        message = json_data.get("mes")
        if message:
            print(f"Received message: {message}")
            # Now you can use the 'message' variable in your response or any other processing
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")

    client_socket.close()
