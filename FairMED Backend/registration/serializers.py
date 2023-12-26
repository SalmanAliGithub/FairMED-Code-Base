from rest_framework import serializers
from . models import *


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientModel
        fields = (
            'name',
            'email',
            'phone',
            'password'
        )


class PhysicianSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhysicianModel
        fields = (
            'name',
            'email',
            'phone',
            'password'
        )