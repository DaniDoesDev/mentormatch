from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('api/mentor', views.ListMentor, 'mentor')
router.register('api/mentee', views.ListMentee, 'mentee')

urlpatterns = [
    path('', include(router.urls)),
    path('api/menteematch/<email>/', views.ListMentee.as_view({'get': 'querymentee'})),
    path('api/mentormatch/<email>/', views.ListMentor.as_view({'get': 'querymentor'})),
]