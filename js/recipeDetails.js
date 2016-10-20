angular.module('myApp').controller('detailsctrl', 
	function($scope, detail, $routeParams, $window){

$scope.openHeart = 'yes';
$scope.fullHeart = 'no';
$scope.recipeId = $routeParams.recipeId
$scope.ingredientLines = '';
$scope.likes = [];

detail($scope.recipeId).success(function(data){
  console.log(data);
  $scope.data = data;
})

$scope.recipeImg = function(data){
	return data.images
}
/// - format results in an image

$scope.openLink = function(data){
	$scope.link= data.source.sourceRecipeUrl;
	console.log($scope.link); 
	$window.open($scope.link, 'Recpie Link', 'width=800,height=700'
	);
}
/// - click recpie link to open source site

$scope.likeIt = function(data){
	$scope.openHeart = 'no';
	$scope.fullHeart = 'yes';
	$scope.likes.push({
		title: data.name,
		link: data.source.sourceRecipeUrl
	});
	console.log($scope.likes);		
}
/// - like recipe

$scope.unlikeIt = function(){
	$scope.openHeart = 'yes';
	$scope.fullHeart = 'no';
}
/// - unlike recipe
});
/// - detailsctrl