from django import forms 

from .models import *

class CreatePhysicianReviewForm(forms.ModelForm):
    class Meta:
        model = PhysicianRatesAndReviews
        fields = ('rate', 'review')

class CreateHealthCenterReviewForm(forms.ModelForm):
    class Meta:
        model = HealthCenterRatesAndReviews
        fields = ('rate', 'review')