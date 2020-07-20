from django.db import models
from django.conf import settings
from django.utils import timezone


class Post(models.Model):
    # 모델은 DB 테이블과 매핑되고, Model instance는 DB 테이블 내에 1Row 라고 보면 된다.
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    # db와 연동 할 때 다른 모델과의 관계성을 나타낸다.
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    # 생량 가능한 필드 생성

    # def publish(self):
    #     self.published_date = timezone.now()
    #     self.save()

    def __str__(self):
        """모델-> toString 문자열"""
        return self.title
