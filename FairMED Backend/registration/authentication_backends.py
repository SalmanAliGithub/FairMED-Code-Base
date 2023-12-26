# authentication_backends.py

from .models import PatientModel, PhysicianModel

class PatientAuthBackend:
    def authenticate(self, request, email=None, password=None):
        user = PatientModel.objects.filter(email=email).first()
        if user and user.check_password(password):
            return user
        return None

    def get_user(self, user_id):
        try:
            return PatientModel.objects.get(pk=user_id)
        except PatientModel.DoesNotExist:
            return None

class PhysicianAuthBackend:
    def authenticate(self, request, username=None, password=None):
        user = Physician.objects.filter(email=username).first()
        if user and user.check_password(password):
            return user
        return None

    def get_user(self, user_id):
        try:
            return Physician.objects.get(pk=user_id)
        except Physician.DoesNotExist:
            return None
