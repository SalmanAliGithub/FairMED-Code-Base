from registration.authentication_backends import *
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login
from rest_framework import generics
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.settings import api_settings
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView




from .forms import *
from registration.models import PatientModel, PhysicianModel
from django.http import HttpResponse
from registration.serializers import *

from rest_framework.response import Response



class PatientAuthenticationView(APIView):
    authentication_classes = [PatientJWTAuthentication]

    def get(self, request):
        print(request.user)
        return Response({'message': 'This is Authenticated User!'})
    
    def post(self, request):
        """There are expected modifications in the return data, since the data should
        contain the refresh token as well!
        The view also has to be changed into class based view!
        """
        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')

        user = authenticate(request=request, email = email, password = password, acc_type = 'patient')

        if not user:
            message = 'The information you provided was not correct! RETRY with the correct info!'
            return Response ({'message': message})
        else:
            if api_settings.UPDATE_LAST_LOGIN:
                update_last_login(None, user)            

            data = user.jwt_token
            return Response(data)
        


class PhysicianAuthenticationView(APIView):
    authentication_classes = [PhysicianJWTAuthentication]

    def get(self, request):
        print(request.user)
        return Response({'message': 'This is Authenticated User!'})
    
    def post(self, request):
        """There are expected modifications in the return data, since the data should
        contain the refresh token as well!
        The view also has to be changed into class based view!(dec 30th)
        """
        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')

        user = authenticate(request=request, email = email, password = password, acc_type = 'physician')

        if not user:
            message = 'The information you provided was not correct! RETRY with the correct info!'
            return Response ({'message': message})
        else:
            if api_settings.UPDATE_LAST_LOGIN:
                update_last_login(None, user)            

            data = user.jwt_token
            return Response(data)
        

