from django.db import models
# from django.contrib.auth.models import User

# Create your models here.


class Root(models.Model):
    name = models.CharField(max_length=150, verbose_name='Nombre')
    description = models.TextField(verbose_name='Descripción')
    active = models.BooleanField(default=True, verbose_name='Activo')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

    class Meta:
        verbose_name = "raíz"
        verbose_name_plural = "raices"

    def __str__(self):
        return self.name


class Trunk(models.Model):
    name = models.CharField(max_length=150, verbose_name='Nombre')
    description = models.TextField(verbose_name='Descripción')
    active = models.BooleanField(default=True, verbose_name='Activo')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

    class Meta:
        verbose_name = "tronco"
        verbose_name_plural = "troncos"

    def __str__(self):
        return self.name


class Leaf(models.Model):
    name = models.CharField(max_length=150, verbose_name='Nombre')
    description = models.TextField(verbose_name='Descripción')
    active = models.BooleanField(default=True, verbose_name='Activo')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

    class Meta:
        verbose_name = "hoja"
        verbose_name_plural = "hojas"

    def __str__(self):
        return self.name


class Branch(models.Model):
    name = models.CharField(max_length=150, verbose_name='Nombre')
    description = models.TextField(verbose_name='Descripción')
    active = models.BooleanField(default=True, verbose_name='Activo')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

    class Meta:
        verbose_name = "rama"
        verbose_name_plural = "ramas"

    def __str__(self):
        return self.name


class Flower(models.Model):
    name = models.CharField(max_length=150, verbose_name='Nombre')
    description = models.TextField(verbose_name='Descripción')
    active = models.BooleanField(default=True, verbose_name='Activo')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

    class Meta:
        verbose_name = "flor"
        verbose_name_plural = "flores"

    def __str__(self):
        return self.name


class Specie(models.Model):
    name = models.CharField(max_length=150, verbose_name='Nombre')
    description = models.TextField(verbose_name='Descripción')
    active = models.BooleanField(default=True, verbose_name='Activo')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

    class Meta:
        verbose_name = "especie"
        verbose_name_plural = "especies"

    def __str__(self):
        return self.name


class Habitat(models.Model):
    name = models.CharField(max_length=150, verbose_name='Nombre')
    description = models.TextField(verbose_name='Descripción')
    active = models.BooleanField(default=True, verbose_name='Activo')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

    class Meta:
        verbose_name = "habitat"
        verbose_name_plural = "habitats"

    def __str__(self):
        return self.name


class Benefict(models.Model):
    name = models.CharField(max_length=150, verbose_name='Nombre')
    description = models.TextField(verbose_name='Descripción', blank=True)
    characteristic = models.TextField(verbose_name='Caracteristica', blank=True)
    active = models.BooleanField(default=True, verbose_name='Activo')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

    class Meta:
        verbose_name = "beneficio"
        verbose_name_plural = "beneficios"

    def __str__(self):
        return self.name


class Hazard(models.Model):
    name = models.CharField(max_length=150, verbose_name='Nombre')
    description = models.TextField(verbose_name='Descripción', blank=True)
    characteristic = models.TextField(verbose_name='Caracteristica', blank=True)
    active = models.BooleanField(default=True, verbose_name='Activo')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

    class Meta:
        verbose_name = "amenaza"
        verbose_name_plural = "amenazas"

    def __str__(self):
        return self.name


class TypeTree(models.Model):
    name = models.CharField(max_length=150, verbose_name='Nombre')
    scientific_name = models.CharField(blank=True, max_length=250, verbose_name='Nombre cientifico')
    description = models.TextField(blank=True, verbose_name='Descripción')
    family = models.CharField(blank=True, max_length=100, verbose_name='Familia')
    order = models.CharField(blank=True, max_length=100, verbose_name='Orden')
    clase = models.CharField(blank=True, max_length=100, verbose_name='Clase')
    subclass = models.CharField(blank=True, max_length=100, verbose_name='Subclase')
    origin = models.TextField(blank=True, verbose_name='Origen')
    preservation = models.TextField(blank=True, verbose_name='Preservación')
    bark_color = models.CharField(blank=True, max_length=50, verbose_name='Color de corteza')
    root = models.ManyToManyField(Root, blank=True, verbose_name='Raiz')
    trunk = models.ManyToManyField(Trunk, blank=True, verbose_name='Tronco')
    branch = models.ManyToManyField(Branch, blank=True, verbose_name='Rama')
    leaf = models.ManyToManyField(Leaf, blank=True, verbose_name='Hoja')
    flower = models.ManyToManyField(Flower, blank=True, verbose_name='Flor')
    specie = models.ManyToManyField(Specie, blank=True, verbose_name='Especie')
    habitat = models.ManyToManyField(Habitat, blank=True, verbose_name='Habitat')
    benefict = models.ManyToManyField(Benefict, blank=True, verbose_name='Árboles con beneficios')
    active = models.BooleanField(default=True, verbose_name='Activo')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

    class Meta:
        verbose_name = "tipo de árbol"
        verbose_name_plural = "tipos de árboles"

    def __str__(self):
        return self.name


class Tree(models.Model):
    _type = models.ForeignKey(TypeTree, on_delete=models.CASCADE, verbose_name='Tipo de Árbol')
    description = models.TextField(blank=True, verbose_name='Descripción')
    lon = models.DecimalField(max_digits=9, decimal_places=6, verbose_name='Longitud')
    lat = models.DecimalField(max_digits=9, decimal_places=6, verbose_name='Latitud')
    size = models.PositiveSmallIntegerField(verbose_name='Altura en metros aproximada')
    grounded = models.DateTimeField(blank=True, auto_now_add=False, verbose_name='Fecha de plantación')
    circumference = models.PositiveIntegerField(blank=True, verbose_name='Circunferencia en centimetros')
    hazard = models.ManyToManyField(Hazard, blank=True, verbose_name='Amenazas')
    image = models.ImageField(upload_to='trees', verbose_name='Imagen')
    active = models.BooleanField(default=False, verbose_name='Activo')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

    class Meta:
        verbose_name = "árbol"
        verbose_name_plural = "árboles"

    def __str__(self):
        return str(self.id)


class Photo(models.Model):
    name = models.CharField(blank=True, max_length=150, verbose_name='Nombre')
    description = models.CharField(blank=True, max_length=150, verbose_name='Descripción')
    image = models.ImageField(upload_to='trees', verbose_name='Imagen')
    tree = models.ForeignKey(Tree, on_delete=models.CASCADE, blank=True, null=True, verbose_name='Foto de Árbol')
    active = models.BooleanField(default=True, verbose_name='Activo')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

    class Meta:
        verbose_name = "foto de árbol"
        verbose_name_plural = "fotos de árboles"

    def __str__(self):
        return self.name


class Activity(models.Model):
    name = models.CharField(max_length=150, verbose_name='Nombre')
    description = models.CharField(max_length=150, verbose_name='Descripción')
    reason = models.TextField(verbose_name='Razón de')
    tree = models.ForeignKey(Tree, on_delete=models.CASCADE, blank=True, null=True, verbose_name='Árbol manipulado')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

    class Meta:
        verbose_name = "actividad"
        verbose_name_plural = "actividades"

    def __str__(self):
        return self.name


class State(models.Model):
    name = models.CharField(max_length=150, verbose_name='Nombre')
    description = models.CharField(max_length=150, verbose_name='Descripción')
    tree = models.ForeignKey(Tree, on_delete=models.CASCADE, blank=True, null=True, verbose_name='Árbol asociado')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

    class Meta:
        verbose_name = "estado"
        verbose_name_plural = "estados"

    def __str__(self):
        return self.name


class Water(models.Model):
    tree = models.ForeignKey(Tree, on_delete=models.CASCADE)
    active = models.BooleanField(default=True, verbose_name='Activo')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')

    class Meta:
        verbose_name = "riego"
        verbose_name_plural = "riegos"

    def __str__(self):
        return str(self.created)
