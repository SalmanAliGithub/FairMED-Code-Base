from django.db import models

from registration.models import *



class PhysicianRatesAndReviews(models.Model):
    reviewId = models.AutoField(primary_key=True)
    physicianId = models.ForeignKey(PhysicianModel, on_delete=models.CASCADE)
    rate = models.DecimalField(max_digits=5, decimal_places=4)
    review = models.TextField(max_length = 400)
    patientId = models.ForeignKey(PatientModel, null = True, on_delete = models.SET_NULL)
    date_created = models.DateField(auto_now_add=True)

    @property
    def getPatientName(self):
        return self.patientId.name
    
    @property
    def getPhysicianName(self):
        return self.physicianId.name


class HealthCenterRatesAndReviews(models.Model):
    reviewId = models.AutoField(primary_key=True)
    hcId = models.ForeignKey(HealthCenterModel, on_delete=models.CASCADE)
    rate = models.DecimalField(max_digits=5, decimal_places=4)
    review = models.TextField(max_length = 400)
    patientId = models.ForeignKey(PatientModel, null = True, on_delete = models.SET_NULL)
    date_created = models.DateField(auto_now_add=True)


    @property
    def getPatientName(self):
        return self.patientId.name
    
    
    @property
    def getHealthcenterName(self):
        return self.hcId.name
    
