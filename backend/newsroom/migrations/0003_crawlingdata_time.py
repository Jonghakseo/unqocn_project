# Generated by Django 3.0.8 on 2020-07-18 07:37

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('newsroom', '0002_auto_20200712_1915'),
    ]

    operations = [
        migrations.AddField(
            model_name='crawlingdata',
            name='time',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]