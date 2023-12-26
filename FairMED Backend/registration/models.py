from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.forms import ValidationError

class PatientManager(BaseUserManager):
    def create_user(self, email, name, phone, password=None, **extra_fields):
        if not email:
            raise ValueError('Email is required.')
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, phone=phone, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, phone, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, name, phone, password, **extra_fields)

class PatientModel(AbstractBaseUser):
    id = models.AutoField(primary_key = True)
    email = models.EmailField(unique=True,null = True)
    name = models.CharField(max_length=150,null = False)
    phone = models.CharField(max_length=15, null = True, default = None)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    

    objects = PatientManager()

    USERNAME_FIELD = 'name'
    REQUIRED_FIELDS = ['name', 'phone']

    def __str__(self):
        return self.name
    
    


class PhysicianManager(BaseUserManager):
    def create_user(self, email, name, phone, password=None, **extra_fields):
        if not email:
            raise ValueError('Email is required.')
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, phone=phone, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, phone, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, name, phone, password, **extra_fields)

class PhysicianModel(AbstractBaseUser):
    id = models.AutoField(primary_key = True)
    email = models.EmailField(unique=True, null = True)
    name = models.CharField(max_length=150, null= True)
    phone = models.CharField(max_length=15, null = True)  
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    # Add other fields as needed for patient details

    objects = PhysicianManager()

    USERNAME_FIELD = 'name'
    REQUIRED_FIELDS = ['name', 'phone']

    def __str__(self):
        return self.name
