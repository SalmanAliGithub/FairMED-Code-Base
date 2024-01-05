from django.urls import path
from django.conf import settings
from django.conf.urls.static import static


from . import views

app_name = 'medical_record'

urlpatterns = [
   path('create/', views.CreatePatientRecord.as_view(), name='create_record'),
   path('view/', views.PatientRecord.as_view(), name='view_record')

]



if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)