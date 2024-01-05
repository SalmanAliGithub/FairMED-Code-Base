from django.urls import path
from .import views

app_name = 'home'

urlpatterns = [
    path('physicians_reviews_rates/', views.BrowsePhysiciansRate.as_view()),
    path('physicians_reviews_rates/<int:physicianId>/', views.PhysicianDetailView.as_view()),
    path('hcs_reviews_rates/', views.BrowseHealthCentersRate.as_view()),
    path('hcs_reviews_rates/<int:hcId>/', views.HealthCenterDetailView.as_view()),
    path('patient_profile/<int:user_id>/', views.PatientProfile.as_view()),
    path('physician_profile/<int:user_id>/', views.PhysicianProfile.as_view())
]
 