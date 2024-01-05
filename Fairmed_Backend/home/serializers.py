import os

from rest_framework import serializers
from Fairmed_Backend.settings import BASE_DIR
from registration.models import *
from rate_and_review.models import *


from . models import *
from medical_record.models import *


class PhysicianListSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhysicianModel
        fields = (
            'id',
            'name',
            'phone', 
            'email',
            'av_rate',
        )

    
class HealthCenterListSerializer(serializers.ModelSerializer):
    class Meta:
        model = HealthCenterModel
        fields = (
            'id',
            'name',
            'av_rate',
        )

class PhysicianSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhysicianModel
        fields = (
            'id',
            'name',
            'email',
            'phone'
            'av_rate',
            'getRecentReviews'
        )
class PatientSerializer(serializers.ModelSerializer):
    medical_records = serializers.SerializerMethodField()
    class Meta:
        model = PatientModel
        fields = (
            'id',
            'name',
            'email',
            'phone',
            'medical_records'
        )

    def get_medical_records(self, obj):
        med_rec = []
        records = MedicalRecords.objects.filter(patientId = obj)

        for rec in records:
            med_rec.append(rec.record)
        return med_rec

class HealthCenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = HealthCenterModel
        fields = (
            'rate',
            'getRecentReviews'
        )

# class RecentPhysicianSerializer(serializers.ModelSerializer):
#     patientName = serializers.SerializerMethodField()
#     class Meta:
#         model = PhysicianRatesAndReviews
#         fields = (
#             'patientName',
#             'rate',
#             'review'
#         )

    def get_patientName(self, obj):
        return obj.patientId.name if obj.patientId else None


class RecentHealthCenterSerializer(serializers.ModelSerializer):
    patientName = serializers.SerializerMethodField()
    class Meta:
        model = PhysicianRatesAndReviews
        fields = (
            'patientName',
            'rate',
            'review'
        )

    def get_patientName(self, obj):
        return obj.patientId.name if obj.patientId else None
    
class PhysicianDetailSerializer(serializers.ModelSerializer):
    reviews = serializers.SerializerMethodField()
    class Meta:
        model = PhysicianModel
        fields = (
            'id',
            'name',
            ''
        )
