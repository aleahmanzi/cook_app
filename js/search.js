angular.module('myApp').controller('searchctrl', 
	function($scope, search, $routeParams){

  $scope.recipeList = [];
  $scope.matches = [];
  $scope.recipeId = [];
  $scope.term = [{}]
  $scope.block = [{}]
  $scope.recipeId = ""
  $scope.error = 'no';
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
    return match.imageUrlsBySize[90]
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