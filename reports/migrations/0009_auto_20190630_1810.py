# Generated by Django 2.2.2 on 2019-06-30 22:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reports', '0008_auto_20190630_1718'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='report',
            name='hazard',
        ),
        migrations.RemoveField(
            model_name='report',
            name='updated',
        ),
        migrations.AddField(
            model_name='report',
            name='cable_proximity',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='report',
            name='plague',
            field=models.BooleanField(default=0),
        ),
    ]
