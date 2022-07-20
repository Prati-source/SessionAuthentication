from rest_framework.response import Response
from .models import UserProfile
from .serializer import UserProfileSerializer
from rest_framework.views import APIView
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie


class UserProfileView(APIView):
    def get(self, request, format=None):
        user = self.request.user
        username = user.username
        try:
            user_profile = UserProfile.objects.get(user = user)
            user_profile = UserProfileSerializer(user_profile)
            return Response({ 'profile' : user_profile.data , 'username' : str(username)})
        except:
            return Response({'profile' : 'error'})



class UserProfileUpdate(APIView):
    def put(self, request, format=None):
        user = self.request.user
        data = self.request.data
        firstname = data['firstname']
        lastname = data['lastname']
        city = data['city']
        phone = data['phone']

        try:
            username = user.username
            UserProfile.objects.filter(user=user).update(firstname= firstname, lastname=lastname, city=city, phone=phone)
            userprofile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(userprofile)
            return Response({'profile' : user_profile.data , 'username' : str(username)})
        except:
            return Response({'error' : 'updating data error'})


