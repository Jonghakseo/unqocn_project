from rest_framework import serializers
from .models import PortfolioItemData


class ItemSerializer(serializers.ModelSerializer):
    # 직렬화 시키는 클래스
    class Meta:
        # inner class Meta
        # 꺼내와서 보여주고 싶은 필드명들을 적어주면 된다.
        fields = (
            'item_title',
            'item_media_array',
            'item_name',
            'dev_term',
            'dev_intro',
            'dev_feature',
            'dev_review',
        )  # 각 작품에 대한 데이터
        model = PortfolioItemData

