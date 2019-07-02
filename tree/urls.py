from django.urls import path
from .views import (index, 
	list_tree, get_tree, add_tree, # tree functions
	get_root, list_root, # root functions
	get_trunk, list_trunk,
	get_leaf, list_leaf,
	get_branch, list_branch,
	get_flower, list_flower,
	get_specie, list_specie,
	get_habitat, list_habitat,
	get_benefict, list_benefict,
	get_hazard, list_hazard,
	get_type, list_type,
)

urlpatterns = [
	path('', index, name='index'),

	# tree paths
	path('arbol/', get_tree, name='get_tree'),
	path('arbol/<int:tree_id>/', get_tree, name='get_tree'),
	path('arbol/all/', list_tree, name='list_tree'),
	path('arbol/agregar/', add_tree, name='add_tree'),

	# root paths
	path('raiz/', get_root, name='get_root'),
	path('raiz/<int:root_id>/', get_root, name='get_root'),
	path('raiz/all/', list_root, name='list_root'),

	# trunk paths
	path('tronco/', get_trunk, name='get_trunk'),
	path('tronco/<int:trunk_id>/', get_trunk, name='get_trunk'),
	path('tronco/all/', list_trunk, name='list_trunk'),

	# leaf paths
	path('hoja/', get_leaf, name='get_leaf'),
	path('hoja/<int:leaf_id>/', get_leaf, name='get_leaf'),
	path('hoja/all/', list_leaf, name='list_leaf'),

	# branch paths
	path('rama/', get_branch, name='get_branch'),
	path('rama/<int:branch_id>/', get_branch, name='get_branch'),
	path('rama/all/', list_branch, name='list_branch'),

	# flower paths
	path('flor/', get_flower, name='get_flower'),
	path('flor/<int:flower_id>/', get_flower, name='get_flower'),
	path('flor/all/', list_flower, name='list_flower'),	

	# specie paths
	path('especie/', get_specie, name='get_specie'),
	path('especie/<int:specie_id>/', get_specie, name='get_specie'),
	path('especie/all/', list_specie, name='list_specie'), 

	# habitat paths
	path('habitat/', get_habitat, name='get_habitat'),
	path('habitat/<int:habitat_id>/', get_habitat, name='get_habitat'),
	path('habitat/all/', list_habitat, name='list_habitat'), 

	# benefict paths
	path('beneficio/', get_benefict, name='get_benefict'),
	path('beneficio/<int:benefict_id>/', get_benefict, name='get_benefict'),
	path('beneficio/all/', list_benefict, name='list_benefict'), 

	# hazard paths
	path('amenaza/', get_hazard, name='get_hazard'),
	path('amenaza/<int:hazard_id>/', get_hazard, name='get_hazard'),
	path('amenaza/all/', list_hazard, name='list_hazard'), 

	# type paths
	path('tipo/', get_type, name='get_type'),
	path('tipo/<int:type_id>/', get_type, name='get_type'),
	path('tipo/all/', list_type, name='list_type'), 
]
