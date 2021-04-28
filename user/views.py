
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny
from user.serializers import MyTokenObtainPairSerializer, UserSerializer
from rest_framework import viewsets
# from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User


class MyObtainTokenPairView(TokenObtainPairView):
    """For django login api."""

    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer


class UserViewSet(viewsets.ModelViewSet):
    """For django user model api."""

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)
