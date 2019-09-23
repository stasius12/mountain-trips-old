from rest_framework import viewsets

from trips.models import Trip
from .serializers import TripSerializer


class TripViewSet(viewsets.ModelViewSet):
    serializer_class = TripSerializer
    queryset = Trip.objects.all()


# class TripListView(generics.ListAPIView):
#     queryset = Trip.objects.all()
#     serializer_class = TripSerializer


# class TripDetailView(generics.RetrieveAPIView):
#     queryset = Trip.objects.all()
#     serializer_class = TripSerializer


# class TripCreateView(generics.CreateAPIView):
#     queryset = Trip.objects.all()
#     serializer_class = TripSerializer


# class TripUpdateView(generics.UpdateAPIView):
#     queryset = Trip.objects.all()
#     serializer_class = TripSerializer


# class TripDeleteView(generics.DestroyAPIView):
#     queryset = Trip.objects.all()
#     serializer_class = TripSerializer
