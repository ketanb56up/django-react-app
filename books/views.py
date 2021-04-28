
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny
from books.serializers import BookSerializer
from rest_framework import viewsets
# from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from books.models import Book


class BookViewSet(viewsets.ModelViewSet):
    """For django Book model api."""

    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = (AllowAny,)

    def list(self, request, *args, **kwargs):
        if self.request.query_params.get("author_id", None):
            self.queryset = self.queryset.filter(
                author=User.objects.get(pk=self.request.query_params.get("author_id", None)))
        return super().list(request, *args, **kwargs)
