"""
This module contains the custom authentication backends that will be used to authenticate
and authorize users according to their account types!

I used the custom authentication backends because our system has two types accounts 
which both of them need authentication, thus to use the default django authentication 
or DRF authentication class is not possible. 
"""


from .models import PatientModel, PhysicianModel
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import permissions

class PhysicianJWTAuthentication(JWTAuthentication):
    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)
        self.user_model = PhysicianModel

class PatientJWTAuthentication(JWTAuthentication):
    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)
        self.user_model = PatientModel


class PatientAuthBackend:
    def authenticate(self, request, acc_type, email=None, password=None):
        if acc_type == 'patient':
            user = PatientModel.objects.filter(email=email).first()
            if user and user.check_password(password):
                refresh = RefreshToken.for_user(user)

                user.jwt_token = str(refresh.access_token)  # Store token in a custom field (jwt_token)
                user.save()
                return user
            return None
        return None

    def get_user(self, user_id):
        try:
            return PatientModel.objects.get(pk=user_id)
        except PatientModel.DoesNotExist:
            return None

class PhysicianAuthBackend:
    def authenticate(self, request, acc_type, email=None, password=None):
        if acc_type == 'physician':
            user = PhysicianModel.objects.filter(email=email).first()
            if user and user.check_password(password):
                refresh = RefreshToken.for_user(user)

                user.jwt_token = str(refresh.access_token)  # Store token in a custom field (jwt_token)
                user.save()
                return user
            return None
        return None

    def get_user(self, user_id):
        try:
            return PhysicianModel.objects.get(pk=user_id)
        except PhysicianModel.DoesNotExist:
            return None
        



