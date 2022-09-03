from datetime import date
from email.policy import default
import uuid
import os
from django.db import models
# from jsonfield import JSONField
from django.urls import reverse
from django.utils import timezone
import datetime
from datetime import timedelta
from django.apps import apps
from multiselectfield import MultiSelectField

from PyPDF2 import PdfFileReader

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin

from django.conf import settings
from django.db.models.signals import post_save


from .modules import (
    calculateAge, save_pdf_pages_attachment,
    profile_image_file_path, pdf_page_count
)

# Create your models here.


class UserManager(BaseUserManager):

    def create_user(self, email, password=None, **extra_fields):
        # Creates and save a new user
        if not email:
            raise ValueError('Users must have an email address!')

        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        # Creates and save a new superuser
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(PermissionsMixin, AbstractBaseUser):
    # Custom user model supports email instead of username
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    image = models.ImageField(null=True, blank=True,
                              upload_to=profile_image_file_path)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-created',)

    objects = UserManager()

    USERNAME_FIELD = 'email'


class Job(models.Model):
    title = models.CharField(max_length=50)
    organization = models.CharField(max_length=50)
    degree = models.CharField(max_length=50)
    jobType = models.CharField(max_length=50)
    locations = models.JSONField(null=True, blank=True)
    minimumQualifications = models.JSONField(null=True, blank=True)
    preferredQualifications = models.JSONField(null=True, blank=True)
    description = models.JSONField(null=True, blank=True)
    dateAdded = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.title


# class Jobs(models.Model):
#     title = models.CharField(max_length=50)
#     organization = models.CharField(max_length=50)
#     degree = models.CharField(max_length=50)
#     jobType = models.CharField(max_length=50)
#     dateAdded = models.DateField(blank=True, null=True)
#     qualification = models.JSONField(null=True, blank=True)

#     def __str__(self):
#         return self.title


# class Qualification(models.Model):
#     job = models.ForeignKey('Jobs', on_delete=models.CASCADE,
#                             related_name='minimumQualifications')
#     qualification = models.CharField(max_length=200)

#     def __str__(self):
#         return self.qualification


# class PreferredQualification(models.Model):
#     job = models.ForeignKey('Jobs', on_delete=models.CASCADE,
#                             related_name='preferredQualifications')
#     qualification = models.CharField(max_length=200)


# class Description(models.Model):
#     job = models.ForeignKey(
#         'Jobs', on_delete=models.CASCADE, related_name='description')
#     description = models.CharField(max_length=200)

#     def __str__(self):
#         return self.description


# class Location(models.Model):
#     job = models.ForeignKey(
#         'Jobs', on_delete=models.CASCADE, related_name='locations')
#     location = models.CharField(max_length=50)

#     def __str__(self):
#         return self.location


class Spotlight(models.Model):
    img = models.ImageField(null=True, blank=True,
                            upload_to=profile_image_file_path)
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.title
