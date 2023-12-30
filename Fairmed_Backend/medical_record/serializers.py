from rest_framework import serializers

from . models import *


class MedRecSerializer(serializers.Serializer):
    class Meta:
        model = MedicalRecords
        fields = ('record')

    