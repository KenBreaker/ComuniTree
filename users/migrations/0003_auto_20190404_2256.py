# Generated by Django 2.1.7 on 2019-04-04 22:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20181129_0403'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='email',
            field=models.CharField(max_length=250, unique=True),
        ),
    ]
