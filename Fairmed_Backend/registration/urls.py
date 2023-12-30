from django.urls import path

from .import views

app_name = 'registration'

urlpatterns = [
    path('patient/', views.PatientRegistrationView.as_view(), name='patient_reg'),
    path('physician/', views.PhysicianRegistrationView.as_view(), name='physician_reg'),
]
