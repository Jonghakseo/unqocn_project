from django.db import models

# Create your models here.

class PortfolioItemData(models.Model):
    item_title = models.TextField(blank=True, default='')
    # ex JAVA
    item_media_array = models.TextField(blank=True, default='')
    # 작품 스크린샷 및 동영상을 보여줄 부분입니다
    item_name = models.TextField(blank=True, default='')
    # 작품의 이름 ex 학수고대
    dev_term = models.TextField(blank=True, default='')
    # 개발기간
    dev_intro = models.TextField(blank=True, default='')
    # 작품 소개
    dev_feature = models.TextField(blank=True, default='')
    # 작품 주요 기능
    dev_review = models.TextField(blank=True, default='')
    # 작품에 대한 소감

    def __str__(self):
        return str(self.item_title)