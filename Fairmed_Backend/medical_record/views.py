from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.decorators import api_view


from . forms import *
from . models import *
from . serializers import *

@api_view(['GET','POST'])
def create_record(request):
    '''
    This view is not fully developed. The following modifications are required to be added 
    before it becomes fully usable:
     - The patient, physician and health center instances have to be captured from the frontend 
       or the one that is directly using the feature at that time!
    '''

    if request.method == 'GET':
        return Response({'message': 'This is a view created for the creation of the medical records!'})
    

    elif request.method == 'POST':
        form = RecordCreationForm(request.POST, request.FILES)
        print(request.FILES.get('record'))

        if form.is_valid():
            record = form.cleaned_data['record']
            patient = PatientModel.objects.get(name = 'Tamagnu Girma')
            physician = PhysicianModel.objects.get(email = 'betseeegaw@gmail.com')
            hc = HealthCenterModel.objects.get(name = 'Minilik Hospital')

            with open('media/records/' + record.name, 'wb+') as destination:
                for chunk in record.chunks():
                    destination.write(chunk)

            med_rec = MedicalRecords.objects.create(record = record, patientId = patient, physicianId = physician, hcId = hc)
            med_rec.save()
            
            rec = MedicalRecords.objects.get(recordId = med_rec.recordId)

            recordId = rec.recordId
            patient_name = rec.patientId.name
            physician_name = rec.physicianId.name
            hc_name = rec.hcId.name
            
            data = {
                'name': patient_name,
                'Treated by': physician_name,
                'Health center': hc_name,
                'recordId': recordId
            }

            return Response(data=data, status= 201)
        return Response(form.errors, status=400)
