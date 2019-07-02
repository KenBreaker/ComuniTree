from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
	name = models.CharField(max_length=255, blank=True)
	# username = models.CharField(max_length=250, unique=True)
	email = models.CharField(max_length=250, unique=True)

	def __str__(self):
		return self.email