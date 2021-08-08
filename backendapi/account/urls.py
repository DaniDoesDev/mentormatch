from rest_framework import routers
from .api import MentorViewSet

router = routers.DefaultRouter()
router.register('api/mentor', MentorViewSet, 'mentor')

urlpatterns = router.urls