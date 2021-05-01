
from django.contrib import admin
from django.urls import path, include, re_path
from user.views import UserViewSet, index
from books.views import BookViewSet
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'user', UserViewSet, basename='user')
router.register(r'book', BookViewSet, basename='book')

urlpatterns = [
	re_path('', index, name='index'),
    path('admin/', admin.site.urls),
    path('user/', include('user.urls')),
    path('api/', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
