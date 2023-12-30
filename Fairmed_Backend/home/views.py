from rest_framework.exceptions import MethodNotAllowed
from django.shortcuts import render
from django import views
from django.http import HttpResponse

from rest_framework.response import Response
from rest_framework import generics
from rest_framework.decorators import api_view, authentication_classes
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .models import *
from rate_and_review.models import *
from rate_and_review.forms import *
from registration.models import *
from .serializers import *
from registration.authentication_backends import *


class BrowsePhysiciansRate(generics.ListCreateAPIView):
    queryset = PhysicianRatesAndReviews.objects.all()
    serializer_class = PhysicianListSerializer

    def post(self, request, *args, **kwargs):
        raise MethodNotAllowed('POST')
    

class BrowseHealthCentersRate(generics.ListCreateAPIView):
    queryset = HealthCenterRatesAndReviews.objects.all()
    serializer_class = HealthCenterListSerializer

    def post(self, request, *args, **kwargs):
        raise MethodNotAllowed('POST')

class PatientProfile(APIView):
    authentication_classes = [PatientJWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request, user_id):
        user = request.user
        data = PatientSerializer(user).data


        return Response(data)
    
    def put(self, request):
        """For Updating Profile!"""
        pass

class PhysicianProfile(APIView):
    authentication_classes = [PhysicianJWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request, user_id):
        user = request.user
        data = PhysicianSerializer(user).data


        return Response(data)
    
    def put(self, request):
        """For Updating Profile!"""
        pass

