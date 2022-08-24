from rest_framework.decorators import action
from rest_framework.response import Response

from django_filters.rest_framework import DjangoFilterBackend

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

from core.models import Description, Job, Location, PreferredQualification, Qualification, Spotlight, User
from .serializers import (
    DescriptionSerializer, JobSerializer, LocationSerializer, PreferredQualificationSerializer, QualificationSerializer, SpotlightSerializer, UserSerializer, AuthTokenSerializer, 
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
    filter_backends = [DjangoFilterBackend]
    lookup_field = 'id'

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        # print(self.request.query_params)
        queryset = Job.objects.all()
        
        # PERFORM FILTER BY SEARCH INPUT
        conditions = Q()
        org_keywords = self.request.query_params.get('organization', None)
        job_type_keywords = self.request.query_params.get('job-type', None)
        # organizations_keywords = self.request.GET.getlist("organization")
        # print(keywords)
        if org_keywords is not None:
            
            org_keywords_list = org_keywords.split(',') 
            print("organiztion= ",org_keywords_list)

        if job_type_keywords is not None:
            
            job_type_keywords_list = job_type_keywords.split(',') 
            print("jobType= ",job_type_keywords_list)
            
            # print(keywords_list)
            # for word in keywords_list:
                # print (f'This word is: {word}')
            
            conditions |= Q(organization__in=org_keywords_list) | Q(jobType__in=job_type_keywords_list)

            
            if conditions:
                # print(type(conditions))
                queryset = Job.objects.filter(conditions)
                print(len(queryset))

        # PERFORM FILTER BY DATE
        # JOB OBJECT DOESNT HAVE DATE

        return queryset

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

class SpotlightViewset(viewsets.ModelViewSet):
    queryset = Spotlight.objects.all()
    serializer_class = SpotlightSerializer
    permission_classes = (permissions.AllowAny,)
    lookup_field = 'id'