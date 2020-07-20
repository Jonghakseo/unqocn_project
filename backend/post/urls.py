from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListPost.as_view()),
    # 그냥 api링크로 들어오면 리스트를 출력
    path('<int:pk>/', views.DetailPost.as_view()),
    # int가 붙은 패턴으로 들어오면 디테일 보여주기로 연결
    # as_view 가 아니면 html 만들어서 메소드로 직접 보여줘야함
]