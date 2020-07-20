from django.shortcuts import render

from rest_framework import generics

from .models import Post
from .serializers import PostSerializer
# 만들어놓은 PostSerializer 가져옴


class ListPost(generics.ListCreateAPIView):
    # 리스트로 포스트들 보여줄 때 사용하는 클래스
    queryset = Post.objects.all()
    # 쿼리셋(보여줄 데이터들을 정의하는 부분)
    serializer_class = PostSerializer
    # serializer 할당


class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    # 하나씩 포스트를 보여줄때 사용하는 클래스
    queryset = Post.objects.all()
    serializer_class = PostSerializer
