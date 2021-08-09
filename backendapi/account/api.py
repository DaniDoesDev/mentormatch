from account.models import Mentor, Mentee
from rest_framework import viewsets, permissions
from .serializers import MentorSerializer, MenteeSerializer

# Mentor viewset
class MentorViewSet(viewsets.ModelViewSet):
  queryset = Mentor.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = MentorSerializer

# Mentor viewset
class MentorMatchViewSet(viewsets.ModelViewSet):
  temp = Mentor.objects.filter(id=id) 
  temp_company = 
  queryset = Mentee.objects.filter(interested_company=temp_company)
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = MentorSerializer

# Mentee viewset
class MenteeViewSet(viewsets.ModelViewSet):
  queryset = Mentee.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = MenteeSerializer