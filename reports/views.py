# Create your views here.

from rest_framework import generics
from . import models
from . import serializers
from tree.models import Tree
from users.models import CustomUser
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

class ReportListView(generics.ListAPIView):
	queryset = models.Report.objects.all()
	serializer_class = serializers.ReportSerializer

class ReportView(generics.RetrieveAPIView):
	queryset = models.Report.objects.all()
	serializer_class = serializers.ReportSerializer

class ReportViewGetByTree(generics.ListAPIView):
	serializer_class = serializers.ReportSerializer

	def get_queryset(self):
		return models.Report.objects.filter(tree__id=self.kwargs["tree_id"])


# todo: paginate reports
# def get_reports(request):
# 	skip = int(request.GET.get('desde', 1))
# 	to = int(request.GET.get('hasta', 2))
		
# 	reports = Report.objects.all()[skip-1:to+1]
# 	serializer = ReportSerializer(trees, many=True)
	
# 	data = {
# 		'ok': True,
# 		'data': serializer.data,
# 	}
# 	return JsonResponse(data)


@csrf_exempt
def add_report(request):
	if request.method == 'POST':
		if request.META.get("CONTENT_TYPE").lower() == "application/json":
			data = json.loads(request.body)
		else:
			data = request.POST

		report = models.Report()
		report.tree = Tree.objects.get(pk=int(data["tree_id"]))
		report.description = data["description"]
		report.uploaded_by = data["user_email"]
		report.cable_proximity = data["cable_proximity"]
		report.plague = data["plague"]
		report.image = data["image"]
		report.other = data["other"]
		report.save()
		serializer = serializers.ReportSerializer(report)

		data = {
			'ok': True,
			'data': serializer.data
		}

		return JsonResponse(data)
	else:
		response = {
			'ok': False,
			'status': 204,
			'error': {
				'message': 'method {} not implemented'.format(request.method),
			}
		}
		return JsonResponse(response)