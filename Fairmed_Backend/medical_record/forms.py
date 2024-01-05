from django import forms


from . models import *


class RecordCreationForm(forms.ModelForm):
    class Meta:
        model = MedicalRecords
        fields = (
            'record',
        )