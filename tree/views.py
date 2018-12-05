from django.http import HttpResponse, JsonResponse, QueryDict
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from .models import (
	Tree, Root, Trunk, Leaf, Branch, TypeTree,
	Flower, Specie, Habitat, Benefict, Hazard
)
from .serializers import (
	TreeSerializer, RootSerializer, TrunkSerializer, LeafSerializer, 
	BranchSerializer, FlowerSerializer, SpecieSerializer, HabitatSerializer, 
	BenefictSerializer, HazardSerializer, TypeTreeSerializer
)
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
import datetime
import json

# Create your views here.
class JSONResponse(HttpResponse):
	"""
	An HttpResponse that renders its content into JSON.
	"""
	def __init__(self, data, **kwargs):
		content = JSONRenderer().render(data)
		kwargs['content_type'] = 'application/json'
		super(JSONResponse, self).__init__(content, **kwargs)

def list_tree(request):
	if request.method == 'GET':
		trees = Tree.objects.filter(active=True)
		serializer = TreeSerializer(trees, many=True)
		data = {
			'ok': True,
			'data': serializer.data
		}
		return JSONResponse(data)
		
	else:
		response = {
			'ok': False,
			'error': {
				'message': 'There is no POST method implemented'
			}
		}
		return JsonResponse(response)

def get_tree(request, tree_id=None):
	if tree_id:
		try:
			tree = Tree.objects.get(pk=tree_id)
			serializer = TreeSerializer(tree)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except Tree.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no tree with id {}'.format(tree_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', 1)
		to = request.GET.get('hasta', 2)
		if skip and to:
			skip, to = int(skip), int(to)
			trees = Tree.objects.all()[skip-1:to+1]
			serializer = TreeSerializer(trees, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)

# roots
def list_root(request):
	if request.method == 'GET':
		roots = Root.objects.filter(active=True)
		serializer = RootSerializer(roots, many=True)
		data = {
			'ok': True,
			'data': serializer.data
		}
		return JSONResponse(data)
		
	else:
		response = {
			'ok': False,
			'error': {
				'message': 'There is no POST method implemented'
			}
		}
		return JsonResponse(response)

def get_root(request, root_id=None):
	if root_id:
		try:
			root = Root.objects.get(pk=root_id)
			serializer = RootSerializer(root)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except Root.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no root with id {}'.format(root_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', 1)
		to = request.GET.get('hasta', 2)
		if skip and to:
			skip, to = int(skip), int(to)
			roots = Root.objects.all()[skip-1:to+1]
			serializer = RootSerializer(roots, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)

# trunks
def list_trunk(request):
	if request.method == 'GET':
		trunk = Trunk.objects.filter(active=True)
		serializer = TrunkSerializer(trunk, many=True)
		data = {
			'ok': True,
			'data': serializer.data
		}
		return JSONResponse(data)
		
	else:
		response = {
			'ok': False,
			'error': {
				'message': 'There is no POST method implemented'
			}
		}
		return JsonResponse(response)

def get_trunk(request, trunk_id=None):
	if trunk_id:
		try:
			trunk = Trunk.objects.get(pk=trunk_id)
			serializer = TrunkSerializer(trunk)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except Trunk.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no trunk with id {}'.format(trunk_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', 1)
		to = request.GET.get('hasta', 2)
		if skip and to:
			skip, to = int(skip), int(to)
			trunks = Trunk.objects.all()[skip-1:to+1]
			serializer = TrunkSerializer(trunks, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)

# leaf
def list_leaf(request):
	if request.method == 'GET':
		leaf = Leaf.objects.filter(active=True)
		serializer = LeafSerializer(leaf, many=True)
		data = {
			'ok': True,
			'data': serializer.data
		}
		return JSONResponse(data)
		
	else:
		response = {
			'ok': False,
			'error': {
				'message': 'There is no POST method implemented'
			}
		}
		return JsonResponse(response)

def get_leaf(request, leaf_id=None):
	if leaf_id:
		try:
			leaf = Leaf.objects.get(pk=leaf_id)
			serializer = LeafSerializer(leaf)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except Leaf.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no leaf with id {}'.format(leaf_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', 1)
		to = request.GET.get('hasta', 2)
		if skip and to:
			skip, to = int(skip), int(to)
			leafs = Leaf.objects.all()[skip-1:to+1]
			serializer = LeafSerializer(leafs, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)

# branch
def list_branch(request):
	if request.method == 'GET':
		branch = Branch.objects.filter(active=True)
		serializer = BranchSerializer(branch, many=True)
		data = {
			'ok': True,
			'data': serializer.data
		}
		return JSONResponse(data)
		
	else:
		response = {
			'ok': False,
			'error': {
				'message': 'There is no POST method implemented'
			}
		}
		return JsonResponse(response)

def get_branch(request, branch_id=None):
	if branch_id:
		try:
			branch = Branch.objects.get(pk=branch_id)
			serializer = BranchSerializer(branch)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except Branch.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no branch with id {}'.format(branch_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', 1)
		to = request.GET.get('hasta', 2)
		if skip and to:
			skip, to = int(skip), int(to)
			branches = Branch.objects.all()[skip-1:to+1]
			serializer = BranchSerializer(branches, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)

# flower
def list_flower(request):
	if request.method == 'GET':
		flower = Flower.objects.filter(active=True)
		serializer = FlowerSerializer(flower, many=True)
		data = {
			'ok': True,
			'data': serializer.data
		}
		return JSONResponse(data)
		
	else:
		response = {
			'ok': False,
			'error': {
				'message': 'There is no POST method implemented'
			}
		}
		return JsonResponse(response)

def get_flower(request, flower_id=None):
	if flower_id:
		try:
			flower = Flower.objects.get(pk=flower_id)
			serializer = FlowerSerializer(flower)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except Flower.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no flower with id {}'.format(flower_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', 1)
		to = request.GET.get('hasta', 2)
		if skip and to:
			skip, to = int(skip), int(to)
			flowers = Flower.objects.all()[skip-1:to+1]
			serializer = FlowerSerializer(flowers, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)


# specie
def list_specie(request):
	if request.method == 'GET':
		specie = Specie.objects.filter(active=True)
		serializer = SpecieSerializer(specie, many=True)
		data = {
			'ok': True,
			'data': serializer.data
		}
		return JSONResponse(data)
		
	else:
		response = {
			'ok': False,
			'error': {
				'message': 'There is no POST method implemented'
			}
		}
		return JsonResponse(response)

def get_specie(request, specie_id=None):
	if specie_id:
		try:
			specie = Specie.objects.get(pk=specie_id)
			serializer = SpecieSerializer(specie)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except Specie.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no specie with id {}'.format(specie_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', 1)
		to = request.GET.get('hasta', 2)
		if skip and to:
			skip, to = int(skip), int(to)
			species = Specie.objects.all()[skip-1:to+1]
			serializer = SpecieSerializer(species, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)

# habitat
def list_habitat(request):
	if request.method == 'GET':
		habitat = Habitat.objects.filter(active=True)
		serializer = HabitatSerializer(habitat, many=True)
		data = {
			'ok': True,
			'data': serializer.data
		}
		return JSONResponse(data)
		
	else:
		response = {
			'ok': False,
			'error': {
				'message': 'There is no POST method implemented'
			}
		}
		return JsonResponse(response)

def get_habitat(request, habitat_id=None):
	if habitat_id:
		try:
			habitat = Habitat.objects.get(pk=habitat_id)
			serializer = HabitatSerializer(habitat)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except Habitat.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no habitat with id {}'.format(habitat_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', 1)
		to = request.GET.get('hasta', 2)
		if skip and to:
			skip, to = int(skip), int(to)
			habitats = Habitat.objects.all()[skip-1:to+1]
			serializer = HabitatSerializer(habitats, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)

# benefict
def list_benefict(request):
	if request.method == 'GET':
		benefict = Benefict.objects.filter(active=True)
		serializer = BenefictSerializer(benefict, many=True)
		data = {
			'ok': True,
			'data': serializer.data
		}
		return JSONResponse(data)
		
	else:
		response = {
			'ok': False,
			'error': {
				'message': 'There is no POST method implemented'
			}
		}
		return JsonResponse(response)

def get_benefict(request, benefict_id=None):
	if benefict_id:
		try:
			benefict = Benefict.objects.get(pk=benefict_id)
			serializer = BenefictSerializer(benefict)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except Benefict.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no benefict with id {}'.format(benefict_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', 1)
		to = request.GET.get('hasta', 2)
		if skip and to:
			skip, to = int(skip), int(to)
			beneficts = Benefict.objects.all()[skip-1:to+1]
			serializer = BenefictSerializer(beneficts, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)

# hazard
def list_hazard(request):
	if request.method == 'GET':
		hazard = Hazard.objects.filter(active=True)
		serializer = HazardSerializer(hazard, many=True)
		data = {
			'ok': True,
			'data': serializer.data
		}
		return JSONResponse(data)
		
	else:
		response = {
			'ok': False,
			'error': {
				'message': 'There is no POST method implemented'
			}
		}
		return JsonResponse(response)

def get_hazard(request, hazard_id=None):
	if hazard_id:
		try:
			hazard = Hazard.objects.get(pk=hazard_id)
			serializer = HazardSerializer(hazard)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except Hazard.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no hazard with id {}'.format(hazard_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', 1)
		to = request.GET.get('hasta', 2)
		if skip and to:
			skip, to = int(skip), int(to)
			hazards = Hazard.objects.all()[skip-1:to+1]
			serializer = HazardSerializer(hazards, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)

# type
def list_type(request):
	if request.method == 'GET':
		_type = TypeTree.objects.filter(active=True)
		serializer = TypeTreeSerializer(_type, many=True)
		data = {
			'ok': True,
			'data': serializer.data
		}
		return JSONResponse(data)
		
	else:
		response = {
			'ok': False,
			'error': {
				'message': 'There is no POST method implemented'
			}
		}
		return JsonResponse(response)

def get_type(request, type_id=None):
	if type_id:
		try:
			_type = TypeTree.objects.get(pk=type_id)
			serializer = TypeTreeSerializer(_type)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except TypeTree.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no type tree with id {}'.format(type_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', 1)
		to = request.GET.get('hasta', 2)
		if skip and to:
			skip, to = int(skip), int(to)
			_type = TypeTree.objects.all()[skip-1:to+1]
			serializer = TypeTreeSerializer(_type, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)

@csrf_exempt
def add_tree(request):
	if request.method == 'POST':
		if request.META.get("CONTENT_TYPE").lower() == "application/json":
			data = json.loads(request.body)
		else:
			data = request.POST

		tree = Tree()
		tree._type = TypeTree.objects.get(pk=int(data["type_id"]))
		tree.description = data["description"]
		tree.lon = float(data["lon"])
		tree.lat = float(data["lat"])
		tree.size = int(data["size"])
		date = datetime.datetime.strptime(data["grounded"], "%d/%m/%Y")
		tree.grounded = date
		tree.circumference = int(data["circumference"])
		
		tree.save()

		hazard_list = request.POST.getlist("hazard")
		hazard_list = list(map(int, hazard_list))
		
		if len(hazard_list) != 0:
			for idx in hazard_list:
				try:
					hazard = Hazard.objects.get(pk=idx)
					tree.hazard.add(hazard)
				except Hazard.DoesNotExist:
					data = {
						'ok': False,
						'message': 'Hazard with id {} does not exists'.format(idx)
					}
					return JSONResponse(data)

		tree.save()
		serializer = TreeSerializer(tree)

		data = {
			'ok': True,
			'data': serializer.data
		}
		return JSONResponse(data)
	else:
		response = {
			'ok': False,
			'status': 204,
			'error': {
				'message': 'method {} not implemented'.format(request.method),
			}
		}
		return JsonResponse(response)

# activity, state, photo & water not implemented


def index(request):
	return HttpResponse('index')