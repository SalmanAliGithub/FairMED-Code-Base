from rest_framework.exceptions import MethodNotAllowed
from django.shortcuts import render
from django import views
from django.http import HttpResponse

from rest_framework.response import Response
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.views import APIView

from .models import *
from .forms import *
from registration.models import *
from .serializers import *



def setRecentReviews(entity, entity_type):
    if entity_type == 'physician':
        recentQuerySet = PhysicianRatesAndReviews.objects.filter(physicianId = entity.id).order_by('date_created')[:5]
        rec_list = []
        for rev in recentQuerySet:
            recentRev = RecentPhysicianSerializer(rev).data
            rec_list.append(recentRev)

        rec_reviews = json.dumps(rec_list)

        physician = PhysicianModel.objects.get(id = entity.id)
        physician.recent_reviews = rec_reviews

        physician.save()

    elif entity_type == 'health_center':
        recentQuerySet = HealthCenterRatesAndReviews.objects.filter(hcId = entity.id).order_by('date_created').all()
        rec_list = []
        for rev in recentQuerySet:
            recentRev = RecentHealthCenterSerializer(rev).data
            rec_list.append(recentRev)

        rec_reviews = json.dumps(rec_list)

        hc = HealthCenterModel.objects.get(id = entity.id)
        hc.recent_reviews = rec_reviews

        hc.save()


    
def setAverageRate(entity, entity_type):
    if entity_type == 'physician':
        physicianRates = PhysicianRatesAndReviews.objects.filter(physicianId = entity.id)
        sum = 0
        for obj in physicianRates:
            sum += obj.rate
        average_rate = round(sum/len(physicianRates), 4)

        physician = PhysicianModel.objects.get(id = entity.id)
        physician.av_rate = average_rate
        physician.save()

    elif entity_type == 'health_center':
        hcRates = HealthCenterRatesAndReviews.objects.filter(hcId = entity.id)
        sum = 0
        for obj in hcRates:
            sum += obj.rate
        average_rate = round(sum/len(hcRates), 4)

        hc = HealthCenterModel.objects.get(id = entity.id)
        hc.av_rate = average_rate
        hc.save()


    
class CreateRateAndReview(APIView):
    """
    This view is specifically for creating rate and review for a physician or a health
    center. It accepts two http methods for now(dec 28). There might be modifications in
    future with additional features. 
    """
    def post(self, request):
        '''
        There are some modifications to be applied to this view(dec 30th). 
        
        The required data are:
            - The entity type to be rated and reviewed
            - The id number of the entity to be rated and reviewed
            - The id number of the patient rating
        the modification includes figuring out method to fetch these data from the request!
        '''
        form1 = CreatePhysicianReviewForm(request.data)
        form2 = CreateHealthCenterReviewForm(request.data)

        entity_type = request.data['entity_type']

        print(request.data['patient_id'])
        if form1.is_valid() and entity_type == 'physician':
            patientId = request.data['patient_id']
            patient = PatientModel.objects.get(id = patientId)
            physicianId = request.data['physician_id']
            physician = PhysicianModel.objects.get(id = physicianId)
            rate = form1.cleaned_data['rate']
            review = form1.cleaned_data['review']
            entity = PhysicianRatesAndReviews.objects.create(patientId = patient, physicianId = physician, rate = rate, review = review)
            entity.save()

            setAverageRate(physician, entity_type)
            setRecentReviews(physician, entity_type)

            serializer = PhysicianListSerializer(entity)

            return Response(serializer.data, status=201)
        
        elif form2.is_valid() and entity_type == 'health_center':
            patientId = request.data['patient_id']
            patient = PatientModel.objects.get(id = patientId)
            hcId = request.data['hc_id']
            hc = HealthCenterModel.objects.get(id = hcId)
            rate = form1.cleaned_data['rate']
            review = form1.cleaned_data['review']
            entity = HealthCenterRatesAndReviews.objects.create(patientId = patient, hcId = hc, rate = rate, review = review)
            entity.save()

            setAverageRate(hc, entity_type)
            setRecentReviews(hc, entity_type)


            serializer = PhysicianListSerializer(entity)

            return Response(serializer.data, status=201)
        return Response({'message':"The view didn't work correctly!"})