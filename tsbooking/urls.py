from django.urls import path,include
from . import views
from .views import get_products
from rest_framework.routers import DefaultRouter
from .views import OrderViewSet



router = DefaultRouter()
router.register('orders', OrderViewSet, basename='orders')

urlpatterns = [
    path("", views.dashboard_home, name="dashboard_home"),
    path("users/", views.users, name="users"),
    path("reports/", views.reports, name="reports"),
    path('api/', include(router.urls)),


    # Master submodules
    path("daily-entry/", views.daily_entry, name="daily_entry"),
    path("events/", views.events, name="events"),
    path("workshops/", views.workshops, name="workshops"),
    path("cinema/", views.cinema, name="cinema"),
    path('api/products/', get_products, name='get_products'),
    

]
    