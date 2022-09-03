from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers
from core.models import (
    Job,
    Spotlight,
    User,
    # Description,
    # Jobs,
    # Location,
    # PreferredQualification,
    # Qualification,
)


class UserSerializer(serializers.ModelSerializer):
    """Serializer for the users object"""

    class Meta:
        model = get_user_model()
        fields = ('id', 'email', 'password', 'name', 'is_staff')
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


class JobSerializer(serializers.ModelSerializer):

    class Meta:
        model = Job
        fields = [
            'id', 'title', 'organization', 'degree', 'jobType', 'locations',
            'minimumQualifications', 'preferredQualifications',
            'description', 'dateAdded',
        ]
        read_only_Fields = ("id",)

    def create(self, validated_data):
        location_data = validated_data.pop('locations')
        minimumQualifications_data = validated_data.pop(
            'minimumQualifications')
        preferredQualifications_data = validated_data.pop(
            'preferredQualifications')
        description_data = validated_data.pop('description')
        job = Job(**validated_data)
        job.locations = location_data
        job.minimumQualifications = minimumQualifications_data
        job.preferredQualifications = preferredQualifications_data
        job.description = description_data

        job.save()        
        return job


class SpotlightSerializer(serializers.ModelSerializer):

    class Meta:
        model = Spotlight
        fields = '__all__'
        read_only_Fields = ('id',)
