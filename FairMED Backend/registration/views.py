from django.shortcuts import render, redirect
from django import views
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView


from .models import PatientModel, PhysicianModel
from .forms import PatientRegForm, PhysicianRegForm


@api_view(['GET', 'POST']) 
def patient(request):
    if request.method == 'GET':
        form = PatientRegForm()
        return render(request, 'registration.html', {'form': form})

    elif request.method == 'POST':
        form = PatientRegForm(request.POST)
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

            # Check if email or phone already exists
            if PatientModel.objects.filter(email=email).exists():
                message = 'The email is already taken.'
                return render(request, 'registration.html', {'form': form, 'message': message})
            elif PatientModel.objects.filter(phone=phone).exists():
                message = 'The phone number is already taken.'
                return render(request, 'registration.html', {'form': form, 'message': message})
            else:
                if password1 == password2:
                    password_nw = make_password(password1)
                    user = PatientModel.objects.create(name=name, email=email, phone=phone, password=password_nw)
                    user.save()
                    return Response(data=data)
                else:
                    message = 'The passwords are not the same!'
                    return render(request, 'registration.html', {'form': form, 'message': message})

        else:
            print(form.errors)
            print(form.errors.as_data())
            return Response({'Error message':form.errors})


@api_view(['GET', 'POST'])
def physician(request):
    if request.method == 'GET':
        form = PhysicianRegForm()
        return render(request, 'registration.html', {'form': form})

    elif request.method == 'POST':
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
                print(phone)
                return Response ({'message': message})
            else:
                if password1 == password2:
                    password_nw = make_password(password1)
                    user = PhysicianModel.objects.create(name=name, email=email, phone=phone, password=password_nw)
                    user.save()
                    return Response(data=data)
                else:
                    message = 'The passwords are not the same!'
                    return Response ({'message': form.errors})

        else:
            print(form.errors)
            print(form.errors.as_data())
            return Response({'Error message':form.errors})


def RegError(request):
    return render(request, '')