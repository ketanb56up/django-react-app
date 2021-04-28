
from django.db import models
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth.models import User


class Book(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='book_author')
    title = models.CharField(max_length=100)
    description = models.TextField()
    poster_image = models.ImageField(upload_to='images/')
    created_at = models.DateTimeField('date published', auto_now_add=True)

    class Meta:
        ordering = ('-created_at', )

    def __str__(self):
        return '"{title}" by {id}'.format(title=self.title, id=self.id)
