from rest_framework import serializers
from registration.models import *
from rate_and_review.models import *


from . models import *


class PhysicianListSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhysicianRatesAndReviews
        fields = (
            'getPatientName',
            'getPhysicianName',
            'rate',
            'review',
            'date_created',
        )

    
class HealthCenterListSerializer(serializers.ModelSerializer):
    class Meta:
        model = HealthCenterRatesAndReviews
        fields = (
            'getPatientName',
            'getHealthcenterName',
            'rate',
            'review',
            'date_created',
        )

class PhysicianSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhysicianModel
        fields = (
            'name',
            'email',
            'phone'
            'av_rate',
            'getRecentReviews'
        )
class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientModel
        fields = (
            'name',
            'email',
            'phone'
        )

class HealthCenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = HealthCenterModel
        fields = (
            'rate',
            'getRecentReviews'
        )

class RecentPhysicianSerializer(serializers.ModelSerializer):
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
