
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import action
from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.response import Response
from books.serializers import BookSerializer
from user.serializers import UserSerializer
from books.models import Book


class BookViewSet(viewsets.ModelViewSet):
    """For django Book model api."""

    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        """To pass onli list of book whose author is logged in user."""
        self.queryset = self.queryset.filter(
            author=User.objects.get(id=request.user.id))
        return super().list(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        """Delete the object."""
        book = self.get_object()
        book.delete()
        return Response(data={'success':True})

    @action(detail=False, permission_classes=(AllowAny,), methods=['get'])
    def all_book_list(self, request):
        """To get list of all books."""
        serializer = BookSerializer(self.queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, permission_classes=[IsAuthenticated], methods=['get'])
    def profile(self, request):
        """To get logged in user profile."""
        user = request.user
        serialized_user = UserSerializer(user).data
        return Response({'user': serialized_user})

