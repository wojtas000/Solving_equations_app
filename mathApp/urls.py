# Create urls for app

from django.urls import path
from . import views

# pattern for index
urlpatterns = [
    path('', views.index, name='index'),
    path('training/<str:difficulty>/', views.training, name='training'),
]
    