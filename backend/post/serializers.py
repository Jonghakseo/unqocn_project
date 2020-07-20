from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    # 직렬화 시키는 클래스
    class Meta:
        # inner class Meta
        # 꺼내와서 보여주고 싶은 필드명들을 적어주면 된다.
        fields = (
            'id',
            'title',
            'content',
            'created_date',
            'published_date',
        )  # id, 제목, 컨텐츠, 생성일
        model = Post
