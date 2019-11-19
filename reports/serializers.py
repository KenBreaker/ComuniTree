from rest_framework import serializers
from tree.serializers import TreeSerializer
from users.serializers import UserSerializer
from .models import Report, PhotoReport, Hazard

class HazardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hazard
        fields = (
            'id', 'name', 'description', 'characteristic',
        )

class PhotoReportSerializer(serializers.ModelSerializer):
	url = serializers.SerializerMethodField('get_url_image')
	class Meta:
		model = PhotoReport
		fields = ('id', 'name', 'description', 'url', )

	def get_url_image(self, obj):
		return obj.image.url

class ReportSerializer(serializers.ModelSerializer):
	#photos = PhotoReportSerializer(read_only=True, source='photo_set', many=True)
	#uploaded_by = UserSerializer(read_only=True)
	tree = TreeSerializer(read_only=True)
	class Meta:
		model = Report
		fields = ('id', 'description', 'uploaded_by','other','cable_proximity','plague','tree', 'created','image' )