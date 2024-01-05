from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from registration.authentication_backends import PhysicianJWTAuthentication


from . forms import *
from . models import *
from . serializers import *

class PatientRecord(APIView):
    authentication_classes = [PhysicianJWTAuthentication]
    permission_classes = [IsAuthenticated]
    def post(self, request):
        form = RecordCreationForm(request.data)

        if form.is_valid():
            patientId = request.data['patient_id']
            patientName = request.data['patient_name']
            patient = PatientModel.objects.get(id = patientId)
            if patient.name == patientName:
                recs = MedicalRecords.objects.filter(patientId = patient)
                rec_list = MedRecSerializer(recs)
                return Response(rec_list, status=200)
            else:
                return Response({'Error:':'Authentication error Provide the correct information!'})
        return Response(form.errors, status=400)
    
def setMedRec(patient):
    try:
        recs = MedicalRecords.objects.filter(patientId = patient.id)
        patient.records = json.dumps(recs)
        patient.save()
        return patient
    except:
        return TypeError

    
class CreatePatientRecord(APIView):
    authentication_classes = [PhysicianJWTAuthentication]
    permission_classes = [IsAuthenticated]
    def post(self, request):
        form = RecordCreationForm(request.data)

        if form.is_valid():
            record = form.cleaned_data['record']
            patientId = request.data['patient_id']
            patient = PatientModel.objects.get(id = patientId)
            physician = request.user
            hc = physician.hcId

            med_rec = MedicalRecords.objects.create(record = record, patientId = patient, physicianId = physician, hcId = hc)
            med_rec.save()

            setMedRec(patient)            

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
        else:
            return Response(form.errors, status=400)
        
