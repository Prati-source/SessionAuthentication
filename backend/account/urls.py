from .views import SignUp, GetCSRFToken, LoginView, LogOut, CheckAuthenticate, UserCheckView, DeleteAccount
from django.urls import path

urlpatterns =[
    path('register/', SignUp.as_view()),
    path('csrfcookie/',GetCSRFToken.as_view()),
    path('login/', LoginView.as_view()),
    path('logout/', LogOut.as_view()),
    path('authenticate/', CheckAuthenticate.as_view()),
    path('users', UserCheckView.as_view()),
    path('deleteuser', DeleteAccount.as_view())


]