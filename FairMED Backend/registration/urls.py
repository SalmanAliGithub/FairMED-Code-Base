from django.urls import path
from .import views

app_name = 'registration'

urlpatterns = [
    path('patient/', views.patient, name='patient_reg'),
    path('physician/', views.physician, name='physician_reg'),
]
