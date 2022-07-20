from rest_framework.views import APIView
from django.contrib import auth
from rest_framework import permissions
from rest_framework.response import Response
from .serializer import UserCheckSerializer
from django.contrib.auth.models import User
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from user_profile.models import UserProfile
from django.utils.decorators import method_decorator

@method_decorator(csrf_protect, name='dispatch')
class CheckAuthenticate(APIView):
    def get(self, request, format=None):

        user = self.request.user
        IsAuthenticated = user.is_authenticated

        if IsAuthenticated:
            return Response({'isAuthenticated' : 'success'})
        else:
            return Response({ 'isAuthenticated' : 'error'})

@method_decorator(csrf_protect, name='dispatch')
class SignUp(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = request.data
        username = data['username']
        password = data['password']
        re_password = data['re_password']

        if password == re_password:
            if User.objects.filter(username = username).exists():
                return Response({ 'error' : 'Username already exists'})
            else:
                    if len(password) < 6:
                        return Response({ 'error' : 'password should have atleast 6 characters'})
                    else:
                        user = User.objects.create_user(username= username, password= password)
                        
                        user = User.objects.get(id = user.id)
                        user_profile = UserProfile.objects.create(user = user, firstname='', lastname='', phone=0, city='')
                    
                        return Response({'sucess'  : 'User created' })

        else:
             return Response({'error' : 'password do not match'})


@method_decorator(csrf_protect, name='dispatch')
class LoginView(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format = None):
        data = self.request.data
        username = data['username']
        password = data['password']

        user = auth.authenticate(username= username, password=password)

        if user is not None:
            auth.login(request, user)
            return Response({'success' : 'User authenticate'})
        else:
            return Response({'error' : "User not authenticate"})


@method_decorator(csrf_protect, name='dispatch')
class LogOut(APIView):
    def post(self, request, format=None):
        try:
            auth.logout(request) 
            return Response({'success': 'Logout'})
        except:
            return Response({'error': 'fail in logout'})
        



@method_decorator(ensure_csrf_cookie,name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = ( permissions.AllowAny, )
    

    def get(self, request, format=None, *args, **kwargs):
        return Response({'success' : 'CSRF token generated'})


class UserCheckView(APIView):
    permission_classes = (permissions.AllowAny, )
    def get(request, self, format=None):
        users = User.objects.all()
        userss = UserCheckSerializer(users, many=True)
        return Response(userss.data)


class DeleteAccount(APIView):
    def delete(self, request, format=None):
        user = self.request.user
        userdel = User.objects.filter(id = user.id).delete()
        return Response({ 'success' : 'delete success' })

