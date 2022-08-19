from rest_framework.decorators import action
from rest_framework.response import Response

from django.db.models import Q

from datetime import datetime, timedelta, date as dt
# from .filters import datefilter, get_date_range as delta

from rest_framework import generics, authentication, permissions


from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings

from django.http import Http404
from rest_framework.views import APIView
from rest_framework import status

from rest_framework import authentication, permissions, parsers, viewsets, mixins, status, views

# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated

from core.models import Description, Job, Location, PreferredQualification, Qualification, User
from .serializers import (
    DescriptionSerializer, JobSerializer, LocationSerializer, PreferredQualificationSerializer, QualificationSerializer, UserSerializer, AuthTokenSerializer, 
    ChangePasswordSerializer,
    )
# from .pagination import PatientPagination, AppointmentPagination


class CreateUserView(generics.CreateAPIView):
    """Create a new user in the system"""
    serializer_class = UserSerializer


class CreateTokenView(ObtainAuthToken):
    """Create a new auth token for the user"""
    serializer_class = AuthTokenSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES


class ManageUserView(generics.RetrieveUpdateAPIView):
    # Manage authenticated user
    serializer_class = UserSerializer
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self):
        # Retrieve and return authenticated user
        return self.request.user

class ChangePasswordView(generics.UpdateAPIView):
        """
        An endpoint for changing password.
        """
        serializer_class = ChangePasswordSerializer
        model = User
        permission_classes = (permissions.IsAuthenticated,)

        def get_object(self, queryset=None):
            obj = self.request.user
            return obj

        def update(self, request, *args, **kwargs):
            self.object = self.get_object()
            serializer = self.get_serializer(data=request.data)

            if serializer.is_valid():
                # Check old password
                if not self.object.check_password(serializer.data.get("old_password")):
                    return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
                # set_password also hashes the password that the user will get
                self.object.set_password(serializer.data.get("new_password"))
                self.object.save()
                response = {
                    'status': 'success',
                    'code': status.HTTP_200_OK,
                    'message': 'Password updated successfully',
                    'data': []
                }

                return Response(response)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            

class JobViewset(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = (permissions.AllowAny,)
    lookup_field = 'id'

class LocationViewset(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    permission_classes = (permissions.AllowAny,)
    lookup_field = 'id'

class QualificationViewset(viewsets.ModelViewSet):
    queryset = Qualification.objects.all()
    serializer_class = QualificationSerializer
    permission_classes = (permissions.AllowAny,)
    lookup_field = 'id'

class PreferredViewset(viewsets.ModelViewSet):
    queryset = PreferredQualification.objects.all()
    serializer_class = PreferredQualificationSerializer
    permission_classes = (permissions.AllowAny,)
    lookup_field = 'id'

class DescriptionViewset(viewsets.ModelViewSet):
    queryset = Description.objects.all()
    serializer_class = DescriptionSerializer
    permission_classes = (permissions.AllowAny,)
    lookup_field = 'id'