from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers
from core.models import (
    Description,
    Job,
    Location,
    PreferredQualification,
    Qualification,
    Spotlight,
    User,
    )

class UserSerializer(serializers.ModelSerializer):
    """Serializer for the users object"""

    class Meta:
        model = get_user_model()
        fields = ('id','email', 'password', 'name', 'is_staff')
        extra_kwargs = {'password': {'write_only': True, 'min_length': 4}}
        read_only_Fields = ('id',)

    def create(self, validated_data):
        """Create a new user with encrypted password and return it"""
        return get_user_model().objects.create_user(**validated_data)
    def update(self, instance, validated_data):
        # Update a user, setting the password correctly and return it
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()

        return user


class AuthTokenSerializer(serializers.Serializer):
    """Serializer for the user authentication object"""
    email = serializers.CharField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False
    )

    def validate(self, attrs):
        """Validate and authenticate the user"""
        email = attrs.get('email')
        password = attrs.get('password')
        

        user = authenticate(
            request=self.context.get('request'),
            email=email,
            password=password
        )

       
       
        if not user:
            msg = _('Unable to authenticate with provided credentials')
            raise serializers.ValidationError(msg, code='authorization')
        
        attrs['user'] = user
        return attrs

class ChangePasswordSerializer(serializers.Serializer):
    model = User

    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


class QualificationSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Qualification
        fields = ('qualification',)
        read_only_Fields = ('id',)

class PreferredQualificationSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = PreferredQualification
        fields = ('qualification',)
        read_only_Fields = ('id',)

class DescriptionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Description
        fields = ('description',)
        read_only_Fields = ('id',)

class LocationSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Location
        fields = ('location',)
        read_only_Fields = ('id',)

class JobSerializer(serializers.ModelSerializer):
    locations = LocationSerializer(many=True, required=False)
    minimumQualifications = QualificationSerializer(many=True, required=False)
    preferredQualifications = PreferredQualificationSerializer(many=True, required=False)
    description = DescriptionSerializer(many=True, required=False)

    class Meta:
        model = Job
        fields = [
            'id', 'title', 'organization', 'degree', 'jobType',
            'locations', 'minimumQualifications', 'preferredQualifications', 'description',
             'dateAdded',
        ]
        read_only_Fields = ("id",)

    def create(self, validated_data):
        print(validated_data)
        job = Job.objects.create(**validated_data)
        return job

class SpotlightSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Spotlight
        fields = '__all__'
        read_only_Fields = ('id',)