from rest_framework.exceptions import MethodNotAllowed
from django.shortcuts import render
from django import views
from django.http import HttpResponse
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import (SearchFilter, OrderingFilter)

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
    """To generate a list of physicians with their definitive rates and reviews"""
    
    queryset = PhysicianModel.objects.all()
    serializer_class = PhysicianListSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ('name',)
    

    def post(self, request, *args, **kwargs):
        raise MethodNotAllowed('POST')
    

class PhysicianDetailView(APIView):
    """Physician's detail view to be presented to any user when the profile is clicked!"""
    
    def get(self, request, physicianId):
        physician = PhysicianModel.objects.get(id = physicianId)
        rec_rev = json.loads(physician.recent_reviews)
        data = {
            'name': physician.name,
            'email': physician.email,
            'phone': physician.phone,
            'rate': physician.av_rate,
            'reviews': rec_rev,
        }

        return Response(data)

    
class BrowseHealthCentersRate(generics.ListCreateAPIView):
    """To generate a list of health centers with their definitive rates and reviews"""
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ('name',)

    queryset = HealthCenterModel.objects.all()
    serializer_class = HealthCenterListSerializer

    def post(self, request, *args, **kwargs):
        raise MethodNotAllowed('POST')
    

class HealthCenterDetailView(APIView):
    """Physician's detail view to be presented to any user when the profile is clicked!"""
    
    def get(self, request, hcId):
        hc = HealthCenterModel.objects.get(id = hcId)
        rec_rev = json.loads(hc.recent_reviews)
        data = {
            'name': hc.name,
            'email': hc.email,
            'rate': hc.av_rate,
            'reviews': rec_rev,
        }

        return Response(data)

"""Patient's detail view to be shown in the patient's dashboard!"""
class PatientProfile(APIView):
    authentication_classes = [PatientJWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request, user_id):
        user = request.user
        data = PatientSerializer(user).data


        return Response(data)
    
    def put(self, request, user_id):
        """For Updating Profile!"""
        patient = request.user
        if request.data:
            try:
                if request.data['name']:
                    patient.name = request.data['name']
            except:
                pass
            try:
                if request.data['email']:
                    patient.email = request.data['email']
            except:
                pass
            patient.save()
            return Response(PatientSerializer(patient).data)
        else:
            return Response(None)
"""Physician's detail view to be shown in the physician's dashboard!"""
class PhysicianProfile(APIView):
    authentication_classes = [PhysicianJWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request, user_id):
        user = request.user
        data = PhysicianSerializer(user).data


        return Response(data)
    
    def put(self, request):
        """For Updating Profile!"""
        physician = request.user
        if request.data:
            try:
                if request.data['name']:
                    physician.name = request.data['name']
            except:
                pass
            try:
                if request.data['email']:
                    physician.email = request.data['email']
            except:
                pass
            physician.save()
            return Response(PhysicianSerializer(physician).data)
        else:
            return Response(None)


