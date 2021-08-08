from rest_framework import generics

from . import models
from . import serializers


class ListMentor(generics.ListCreateAPIView):
    queryset = models.Mentor.objects.all()
    serializer_class = serializers.MentorSerializer

