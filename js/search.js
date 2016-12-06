angular.module('myApp').controller('searchctrl', 
	function($scope, search, $routeParams){

  $scope.recipeList = [];
  $scope.matches = [];
  $scope.recipeId = [];
  $scope.term = [{}]
  $scope.block = [{}]
  $scope.recipeId = ""
  $scope.error = 'no';
  $scope.url = '';
  $scope.newUrl = '';
  $scope.imgUrl = '';
  /// - default values
  
 $scope.search = function(){
    console.log($scope.term, $scope.block);
     search($scope.term, $scope.block).success(function(result){
      console.log(result.matches.length);
          $scope.matches = result.matches;
          $scope.error = 'yes';
      })
  };
/// - return matches for recipe search

 $scope.photoUrl = function(match){
    $scope.url = match.imageUrlsBySize[90]
    $scope.newUrl = $scope.url.substr(0, $scope.url.length-4);
    $scope.imgUrl = $scope.newUrl + '250-c'
    return $scope.imgUrl
  }
/// - format results in an image

$scope.addIngredient = function(){
  $scope.term.push({});
}

$scope.addBlock = function(){
  $scope.block.push({});
}
/// - + button for adding additional included/excluded ingredients


});


/// - searchctrl