from django.urls import path
from . import views

urlpatterns = [
    path('', views.ItemList.as_view()),
    path('<int:pk>/', views.SelectedItem.as_view()),
    # path('java/', views.JavaItem.as_view()),

    # 보여줄 아이템의 키워드로 들어와야 해당 이이템 보여줌
    # as_view 가 아니면 html 만들어서 메소드로 직접 보여줘야함
]
