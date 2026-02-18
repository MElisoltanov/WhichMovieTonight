from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .models import Rating
from .serializers import RatingSerializer


class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permissions(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.user == request.user


class RatingViewSet(viewsets.ModelViewSet):

    serializer_class = RatingSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def get_queryset(self):

        queryset = Rating.objects.all()
        movie_id = self.request.query_params.get('movie_id', None)
        if movie_id:
            queryset =queryset.filter(movie_id=movie_id)
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    def create(self, request, *args, **kwargs):
        movie_id = request.data.get('movie')
        existing_rating = Rating.objects.filter(
            movie_id=movie_id,
            user=request.user
        ).first()

        if existing_rating:
            serializer = self.get_serializer(existing_rating, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return super().create(request, *args, **kwargs)
