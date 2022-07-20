
from django.contrib.auth.models import User
from rest_framework import serializers

class UserCheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'id', 'password')

