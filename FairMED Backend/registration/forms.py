from django import forms
from .models import *

class PatientRegForm(forms.ModelForm):
    password = forms.CharField(max_length=15, widget=forms.PasswordInput, label='Password:')
    password2 = forms.CharField(max_length=15, widget=forms.PasswordInput, label="Confirm Password:")
    class Meta:
        model = PatientModel
        fields = (
            'name', 
            'email', 
            'phone', 
            )
        
    def __init__(self, *args, **kwargs):
        super().__init__( *args, **kwargs)
        self.fields['phone'].required = False
        

class PhysicianRegForm(forms.ModelForm):
    password = forms.CharField(max_length=15, widget=forms.PasswordInput, label='Password:')
    password2 = forms.CharField(max_length=15, widget=forms.PasswordInput, label="Confirm Password:")
    class Meta:
        model = PhysicianModel
        fields = (
            'name',
            'email', 
            'phone',
        )

    def __init__(self, *args, **kwargs):
        super().__init__( *args, **kwargs)
        self.fields['phone'].required = False