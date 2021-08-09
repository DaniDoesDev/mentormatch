from rest_framework import routers
from .api import MentorViewSet, MenteeViewSet

router = routers.DefaultRouter()
router.register('api/mentor', MentorViewSet, 'mentor')
router.register('api/mentee', MenteeViewSet, 'mentee')

urlpatterns = router.urls