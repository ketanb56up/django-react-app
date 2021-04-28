
from books.models import Book
from django.contrib.auth.models import User
from rest_framework import serializers
from user.serializers import UserSerializer


class BookSerializer(serializers.ModelSerializer):
    author_data = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = ('id', 'author', 'title', 'description', 'poster_image', 'created_at','author_data')
        extra_kwargs = {
            'author_data': {'required': True}
        }

    def get_author_data(self, obj):
        return UserSerializer(obj.author).data

