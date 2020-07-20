from django.db import models
from django.utils import timezone


class CrawlingData(models.Model):

    date = models.DateField(default=timezone.now)
    time = models.DateTimeField(default=timezone.now)
    # 크롤링 날짜
    naver = models.TextField(blank=True, default='')
    zdnet = models.TextField(blank=True, default='')
    sbs = models.TextField(blank=True, default='')
    kbs = models.TextField(blank=True, default='')
    jtbc = models.TextField(blank=True, default='')
    tech = models.TextField(blank=True, default='')
    etc = models.TextField(blank=True, default='')

    def __str__(self):
        return str(self.date)
