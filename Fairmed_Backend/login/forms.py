from django import forms
from registration.models import *


class PatientLoginForm(forms.ModelForm):
    class Meta:
        model = PatientModel
        fields = (
            'name',
            'email',
            'password',
        )

class PhysicianLoginForm(forms.ModelForm):
    class Meta:
        model = PhysicianModel
        fields = (
            'name',
            'email',
            'password',
        )