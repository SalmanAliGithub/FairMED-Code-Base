from django.urls import path

from . import views

app_name = 'rate_and_review'

urlpatterns = [
    path('', views.CreateRateAndReview.as_view(), name='create'),
]
