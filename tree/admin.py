from django.contrib import admin
from django.utils.html import mark_safe
from .models import *

# Register your models here.


class RootAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = ('name', 'description', 'updated', )


class TrunkAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = ('name', 'description', 'updated', )


class LeafAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = ('name', 'description', 'updated', )


class BranchAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = ('name', 'description', 'updated', )


class FlowerAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = ('name', 'description', 'updated', )


class SpecieAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = ('name', 'description', 'updated', )


class HabitatAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = ('name', 'description', 'updated', )


class BenefictAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = ('name', 'description', 'characteristic', 'updated', )


class HazardAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = ('name', 'description', 'characteristic', 'updated', )


class TypeTreeAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = (
        'name', 'scientific_name', 'description',
        'family_names', 'clase_names', 'specie_names', 'benefict_names', 'updated',
    )

    def family_names(self, obj):
        return [field.name for field in obj.benefict.all()]

    def clase_names(self, obj):
        return [field.name for field in obj.benefict.all()]

    def specie_names(self, obj):
        return [field.name for field in obj.benefict.all()]

    def benefict_names(self, obj):
        return [field.name for field in obj.benefict.all()]

    benefict_names.short_description = 'Beneficios'


class TreeAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = (
        'code', 'lon', 'lat',
        'size', 'updated','image' )

    def code(self, obj):
        return obj.id

    def hazard_names(self, obj):
        return [field.name for field in obj.hazard.all()]

    code.short_description = 'Código de Árbol'
    hazard_names.short_description = 'Amenazas'


class PhotoAdmin(admin.ModelAdmin):
    readonly_fields = ('get_image', 'created', 'updated')
    list_display = ('get_image', 'tree_name', 'description', 'updated', )

    def tree_name(self, obj):
        if obj.tree._type.name:
            return obj.tree._type.name
        else:
            return 'No existe nombre'

    def get_image(self, obj):
        return mark_safe(u'<img src="%s" style="width:200px;height:200px;"/>' % (obj.image.url))

    tree_name.short_description = 'Tipo de Árbol'


class ActivityAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = ('name', 'description', 'reason', 'get_tree_id', 'updated', )

    def get_tree_id(self, obj):
        return obj.tree.id

    get_tree_id.short_description = 'Código Árbol'


class StateAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = ('name', 'description', 'get_tree_id', 'updated', )

    def get_tree_id(self, obj):
        return obj.tree.id

    get_tree_id.short_description = 'Código Árbol'


class WaterAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = ('get_tree_id', 'last_time_watered', )

    def get_tree_id(self, obj):
        return obj.tree.id

    def last_time_watered(self, obj):
        return obj.created

    get_tree_id.short_description = 'Código Árbol'
    last_time_watered.short_description = 'Última vez regado'


admin.site.register(Root, RootAdmin)
admin.site.register(Trunk, TrunkAdmin)
admin.site.register(Leaf, LeafAdmin)
admin.site.register(Branch, BranchAdmin)
admin.site.register(Flower, FlowerAdmin)
admin.site.register(Specie, SpecieAdmin)
admin.site.register(Habitat, HabitatAdmin)
admin.site.register(TypeTree, TypeTreeAdmin)
admin.site.register(Tree, TreeAdmin)
admin.site.register(Benefict, BenefictAdmin)
admin.site.register(Hazard, HazardAdmin)
admin.site.register(Photo, PhotoAdmin)
admin.site.register(Activity, ActivityAdmin)
admin.site.register(State, StateAdmin)
admin.site.register(Water, WaterAdmin)
