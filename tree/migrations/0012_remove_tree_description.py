# Generated by Django 2.2.2 on 2019-07-02 03:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tree', '0011_auto_20190630_1547'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tree',
            name='description',
        ),
    ]
