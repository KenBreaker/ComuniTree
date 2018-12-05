from django.db import models
from tree.models import Tree
from users.models import CustomUser

# Create your models here.

class Report(models.Model):
	tree = models.ForeignKey(Tree, on_delete=models.CASCADE, verbose_name='Árbol reportado')
	title = models.CharField(max_length=100, verbose_name='Título')
	description = models.TextField(verbose_name='Descripcion')
	uploaded_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE, verbose_name='Subido por')
	active = models.BooleanField(default=True, verbose_name='Activo')
	created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
	updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

	class Meta:
		verbose_name = "reporte"
		verbose_name_plural = "reportes"
	
	def __str__(self):
		return self.title

class PhotoReport(models.Model):
	name = models.CharField(max_length=150, verbose_name='Nombre')
	description = models.CharField(max_length=150, verbose_name='Descripción')
	image = models.ImageField(upload_to='reports', verbose_name='Imagen')
	report = models.ForeignKey(Report, on_delete=models.CASCADE, verbose_name='Reporte asociado', null=True)
	active = models.BooleanField(default=True, verbose_name='Activo')
	created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
	updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

	class Meta:
		verbose_name = "foto de reporte"
		verbose_name_plural = "fotos de reportes"

	def __str__(self):
		return self.name