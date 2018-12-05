from django.contrib import admin
from django.utils.html import mark_safe
from .models import *

# Register your models here.

class ReportAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	list_display = ('report_id', 'title', 'description', 'uploaded_by', 'active', )

	def report_id(self, obj):
		return obj.id

	report_id.short_description = "ID reporte"

class PhotoReportAdmin(admin.ModelAdmin):
	readonly_fields = ('get_image', 'created', 'updated')
	list_display = ('get_report_name', 'name', 'description', 'updated', 'active', 'get_image', )

	def get_image(self, obj):
		return mark_safe(u'<img src="%s" style="width:200px;height:200px;"/>' % (obj.image.url))

	def get_report_name(self, obj):
		return obj.report

	get_report_name.short_description = "Titulo Reporte"

admin.site.register(Report, ReportAdmin)
admin.site.register(PhotoReport, PhotoReportAdmin)