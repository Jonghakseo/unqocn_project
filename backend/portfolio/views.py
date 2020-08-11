from django.shortcuts import render
from rest_framework import generics
from .models import PortfolioItemData
from .serializers import ItemSerializer


# Create your views here.


class ItemList(generics.ListCreateAPIView):
    # 리스트로 작품들 전부 보여줄 때 사용하는 클래스
    queryset = PortfolioItemData.objects.all()
    # 쿼리셋(보여줄 데이터들을 정의하는 부분)
    serializer_class = ItemSerializer
    # serializer 할당
    http_method_names = ['get']


class SelectedItem(generics.RetrieveUpdateDestroyAPIView):
    queryset = PortfolioItemData.objects.all()
    serializer_class = ItemSerializer
    http_method_names = ['get']


# class JavaItem(generics.ListCreateAPIView):
#     # 각 아이템을 보여주는 클래스를 정의합니다.
#     queryset = PortfolioItemData.objects.filter(item_title='Java')
#     serializer_class = ItemSerializer
#     http_method_names = ['get']

#
# class AndroidItem(generics.ListCreateAPIView):
#     # 각 아이템을 보여주는 클래스를 정의합니다.
#     queryset = PortfolioItemData.objects.filter(item_title='Android')
#     serializer_class = ItemSerializer
#     http_method_names = ['get']
