# Generated by Django 2.2.1 on 2019-06-02 17:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tree', '0010_auto_20190404_2256'),
    ]

    operations = [
        migrations.AddField(
            model_name='tree',
            name='image',
            field=models.TextField(blank=True, verbose_name='Image'),
        ),
    ]
