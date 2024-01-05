from rest_framework import serializers


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
            'rate',
            'getRecentReviews'
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
    
