from django.shortcuts import render, redirect
from django import views
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import serializers


import requests

from .models import PatientModel, PhysicianModel
from .forms import PatientRegForm, PhysicianRegForm
from .authentication_backends import *



class PatientRegistrationView(APIView):
    def post(self, request):
        form = PatientRegForm(request.data)
        print(request.data['name'])
        if form.is_valid():
            # name = request.POST.get('name')
            # email = request.POST.get('email')
            # phone = request.POST.get('phone')
            # password1 = request.POST.get('password')
            # password2 = request.POST.get('password2')
            name = request.data['name']
            try:
                email = request.data['email']
            except:
                email = None
            try:
                phone = request.data['phone']
            except:
                phone = None
            password1 = request.data['password']
            password2 = request.data['password2']
            print(bool(phone))

            data = {
                'name': name,
                'email': email,
                'phone': phone,
                'password': password1
            }

            # Check if email or phone already exists
            if PatientModel.objects.filter(email=email).exists():
                message = 'The email is already taken.'
                return Response({'message': message})
            elif phone != None and PatientModel.objects.filter(phone=phone).exists():
                message = 'The phone number is already taken.'
                return Response({'message': message})
            else:
                if password1 == password2:
                    password_nw = make_password(password1) # To Hash the password
                    user = PatientModel.objects.create(name=name, email=email if email else None, phone=phone if phone else None, password=password_nw)
                    user.save()
                    send_Id = sendPatientId(user.id)

                    if send_Id == 200:
                        message = 'The id is succesfuly sent to the Arduino!'
                    else:
                        message = send_Id

                    return Response({'User data':data, 'Finger print Auth message':message}, status=200)
                else:
                    message = 'The passwords are not the same!'
                    return Response({'message': message})

        else:
            return Response({'Error message':form.errors})
        
def sendPatientId(user_id):
    try:
        endpoint = 'http://127.0.0.1:5000'
        res = requests.post(endpoint, json={'Patient_id':user_id})
        return res.status_code
    except:
        return 'There is an error comming from the server!'


# print(sendPatientId(2))



        

class PhysicianRegistrationView(APIView):
    def post(self, request):
        form = PhysicianRegForm(request.POST)
        if form.is_valid():
            name = request.POST.get('name')
            email = request.POST.get('email')
            phone = request.POST.get('phone')
            password1 = request.POST.get('password')
            password2 = request.POST.get('password2')

            data = {
                'name': name,
                'email': email,
                'phone': phone,
                'password': password1
            }

            if PhysicianModel.objects.filter(email=email).exists():
                message = 'The email is already taken.'
                return Response ({'message': message})
            elif phone != None and PhysicianModel.objects.filter(phone=phone).exists():
                message = 'The phone number is already taken.'
                return Response ({'message': message})
            else:
                if password1 == password2:
                    password_nw = make_password(password1)
                    user = PhysicianModel.objects.create(name=name, email=email, phone=phone, password=password_nw)
                    user.save()
                
                    return Response(data)
                else:
                    message = 'The passwords are not the same!'
                    return Response ({'message': form.errors})

        else:
            print(form.errors)
            print(form.errors.as_data())
            return Response({'Error message':form.errors})



def RegError(request):
    return render(request, '')

