from rest_framework import serializers
from account.models import Mentor, Mentee

# Mentor serializer
class MentorSerializer(serializers.ModelSerializer):
  class Meta:
    model = Mentor
    fields = '__all__'