from django.urls import path
from . import views
# from .views import PhysicianTokenObtainPairView

app_name = 'login'

urlpatterns = [
    path('patient/', views.PatientAuthenticationView.as_view(), name='patient'),
    path('physician/', views.PhysicianAuthenticationView.as_view(), name='physician'),
    path('api/token/', views.dataFromFingerPrint),
    # path('api/token/exam/', views.ExampleProtectedView.as_view())
]
