from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.CustomUser
		fields = ('email', 'name', 'username', 'is_staff', )
		read_only_fields = ('is_staff', )