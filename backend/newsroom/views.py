# from django.shortcuts import render
from rest_framework import generics
from .models import CrawlingData
from .serializers import NewsSerializer
from django.utils import timezone


class ListNews(generics.ListCreateAPIView):
    # 리스트로 뉴스를 보여줄 때 사용하는 클래스
    queryset = CrawlingData.objects.all()
    # 쿼리셋(보여줄 데이터들을 정의하는 부분)
    serializer_class = NewsSerializer
    # serializer 할당
    http_method_names = ['get']


class DetailNews(generics.RetrieveUpdateDestroyAPIView):
    # 하나씩 뉴스를 보여줄때 사용하는 클래스
    queryset = CrawlingData.objects.all()
    serializer_class = NewsSerializer
    http_method_names = ['get']


class TodayNews(generics.ListCreateAPIView):
    # 오늘 뉴스만 보여줄때 사용하는 클래스
    queryset = CrawlingData.objects.filter(date=timezone.now())
    serializer_class = NewsSerializer
    http_method_names = ['get']
