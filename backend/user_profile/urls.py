from .views import UserProfileUpdate, UserProfileView
from django.urls import path

urlpatterns = [
    path('profile/', UserProfileView.as_view()),
    path('update/', UserProfileUpdate.as_view()),
]
