from rest_framework import serializers
from .models import (
    Tree, Hazard, TypeTree, Root, Trunk, Photo,
    Leaf, Branch, Flower, Specie, Habitat, Benefict
)


class PhotoSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField('get_url_image')

    class Meta:
        model = Photo
        fields = ('id', 'name', 'description', 'url', )

    def get_url_image(self, obj):
        return obj.image.url


class RootSerializer(serializers.ModelSerializer):
    class Meta:
        model = Root
        fields = ('id', 'name', 'description', )


class TrunkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trunk
        fields = ('id', 'name', 'description', )


class LeafSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leaf
        fields = ('id', 'name', 'description', )


class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = ('id', 'name', 'description', )


class FlowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flower
        fields = ('id', 'name', 'description', )


class SpecieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specie
        fields = ('id', 'name', 'description', )


class HabitatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habitat
        fields = ('id', 'name', 'description', )


class BenefictSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefict
        fields = (
            'id', 'name', 'description', 'characteristic',
        )


class HazardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hazard
        fields = (
            'id', 'name', 'description', 'characteristic',
        )


class TypeTreeSerializer(serializers.ModelSerializer):
    root = RootSerializer(read_only=True, many=True)
    trunk = TrunkSerializer(read_only=True, many=True)
    branch = BranchSerializer(read_only=True, many=True)
    leaf = LeafSerializer(read_only=True, many=True)
    flower = FlowerSerializer(read_only=True, many=True)
    specie = SpecieSerializer(read_only=True, many=True)
    habitat = HabitatSerializer(read_only=True, many=True)
    benefict = BenefictSerializer(read_only=True, many=True)

    class Meta:
        model = TypeTree
        exclude = ['active', 'created', 'updated', ]


class TreeSerializer(serializers.ModelSerializer):
    hazard = HazardSerializer(read_only=True, many=True)
    _type = TypeTreeSerializer(read_only=True, many=False)
    """photos = PhotoSerializer(read_only=True, source='photo_set', many=True)"""

    class Meta:
        model = Tree
        exclude = ['active', 'created', 'updated', ]

    def create(self, validated_data):
        return Tree.objects.create(**validated_data)
