from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import TripViewSet


router = DefaultRouter()
router.register(r'', TripViewSet, base_name='trip')
urlpatterns = router.urls


# urlpatterns = [
#     path('', views.TripListView.as_view()),
#     path('create/', views.TripCreateView.as_view()),
#     path('<pk>/', views.TripDetailView.as_view()),
#     path('<pk>/update/', views.TripUpdateView.as_view()),
#     path('<pk>/delete', views.TripDeleteView.as_view()),
# ]
