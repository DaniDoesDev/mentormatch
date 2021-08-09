from rest_framework import viewsets
from rest_framework.response import Response

from .models import Mentor, Mentee
from .serializers import MentorSerializer, MenteeSerializer
from django.shortcuts import get_list_or_404, get_object_or_404


class ListMentor(viewsets.ModelViewSet):
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer 

    def querymentor(self, request, name=None):
        if name:
            mentee = get_object_or_404(Mentee, name=name)
            mentor_id = mentee.mentor_id
            mentor = Mentor.objects.filter(id=mentor_id)
            serializer = self.get_serializer(mentor, many=True)
            return Response(serializer.data)
        else:
            mentors = Mentor.objects.all()
            serializer = self.get_serializer(mentors, many=True)
            return Response(serializer.data)

class ListMentee(viewsets.ModelViewSet):
    queryset = Mentee.objects.all()
    serializer_class = MenteeSerializer
 
    def querymentee(self, request, name=None):
        if name:
            mentor = Mentor.objects.filter(name=name)
            mentees = []
            if mentor.exists():
                for m in mentor:
                    temps = Mentee.objects.filter(interested_company=m.company)
                    max_num = m.initial_num_mentee
                    if not max_num:
                      max_num = 1
                    num = 0
                    for t in temps:
                        if not t.mentor_id:
                            if num >= max_num:
                                break
                            mentees.append(t)
                            t.mentor_id = m.id
                            t.save()
                            num = num + 1
            serializer = self.get_serializer(mentees, many=True)
            return Response(serializer.data)
        else:
            mentees = Mentee.objects.all()
            serializer = self.get_serializer(mentees, many=True)
            return Response(serializer.data)

