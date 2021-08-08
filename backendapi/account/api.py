from account.models import Mentor
from rest_framework import viewsets, permissions
from .serializers import MentorSerializer

# Mentor viewset
class MentorViewSet(viewsets.ModelViewSet):
  queryset = Mentor.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = MentorSerializer