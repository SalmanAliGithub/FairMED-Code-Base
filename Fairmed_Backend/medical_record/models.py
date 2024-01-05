from django.db import models

from registration.models import *

class MedicalRecords(models.Model):
    patientId = models.ForeignKey(PatientModel, on_delete = models.CASCADE)
    recordId = models.AutoField(primary_key= True)
    record = models.TextField(null = True)
    date_created = models.DateTimeField(auto_now_add = True)
    physicianId = models.ForeignKey(PhysicianModel, on_delete = models.SET_NULL, null = True)
    hcId = models.ForeignKey(HealthCenterModel, on_delete = models.SET_NULL, null = True)
