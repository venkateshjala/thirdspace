from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Product,Order
from .serializers import ProductSerializer,OrderSerializer

@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by('-id')
    serializer_class = OrderSerializer

    def create(self, request, *args, **kwargs):
        # Ensure order has items
        items = request.data.get("items", [])
        if not items:
            return Response(
                {"error": "Order must contain items."},
                status=status.HTTP_400_BAD_REQUEST
            )

        return super().create(request, *args, **kwargs)

def dashboard_home(request):
    return render(request, "dashboard/dashboard_home.html")

def users(request):
    return render(request, "users.html")

def reports(request):
    return render(request, "reports.html")

def load_partial(request, page):
    templates = {
        "dashboard_home": "dashboard_home.html",
        "users": "users.html",
        "reports": "reports.html",
    }
    return render(request, templates.get(page, "dashboard_home.html"))

def daily_entry(request):
    return render(request, "masters/DailyEntry.html")

def events(request):
    return render(request, "masters/events.html")

def workshops(request):
    return render(request, "masters/workshops.html")

def cinema(request):
    return render(request, "masters/cinema.html")


