from django.urls import path, include, re_path
from rest_framework import routers

from .views import (
    CreateUserView, CreateTokenView, DescriptionViewset, LocationViewset,
    ManageUserView, ChangePasswordView, JobViewset, JobsViewset,
    PreferredViewset, QualificationViewset, SpotlightViewset)


router = routers.DefaultRouter()
router.register('job', JobViewset)
router.register('jobs', JobsViewset)
router.register('locations', LocationViewset)
router.register('qualifications', QualificationViewset)
router.register('preferredqualifications', PreferredViewset)
router.register('descriptions', DescriptionViewset)
router.register('spotlights', SpotlightViewset)
# router.register(r'Receive', api.ReceiveViewSet)


urlpatterns = [
    path('', include(router.urls)),
    #path('upload/', FileList.as_view()),
    path('user/create/', CreateUserView.as_view(), name='create'),
    path('user/token/', CreateTokenView.as_view(), name='token'),
    path('user/me/', ManageUserView.as_view(), name='me'),
    path('user/change-password/',
         ChangePasswordView.as_view(), name='password-change'),

]
