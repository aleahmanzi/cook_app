angular.module('myApp') 

 .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: './html/home.html',
    })
    .when('/myrecipes', {
        templateUrl: './html/myrecipes.html',
        controller: 'recipesctrl'
    })
    .when('/search', {
        templateUrl: './html/search.html',
        controller: 'searchctrl'
    })
    .when('/search/:recipeId', {
        templateUrl: './html/recipeDetails.html',
        controller: 'detailsctrl'
    })
    .when('/error', {
        template: '<p>page not found</p>'
    });
 }]); /// - config
