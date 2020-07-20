from rest_framework import serializers
from .models import CrawlingData


class NewsSerializer(serializers.ModelSerializer):
    # 직렬화 시키는 클래스
    class Meta:
        # inner class Meta
        # 꺼내와서 보여주고 싶은 필드명들을 적어주면 된다.
        fields = (
            'id',
            'date',
            'naver',
            'zdnet',
            'sbs',
            'kbs',
            'jtbc',
            'tech',
            'etc',
        )  # 날짜 및 각 뉴스 사이트 크롤링 데이터
        model = CrawlingData

