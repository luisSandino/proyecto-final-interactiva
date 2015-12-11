var controllers = angular.module('allCrFutbol.controllers', []);




controllers.controller('InicioController', ['$scope', function($scope, myFactory){
	
}]);

controllers.controller('TablaController',  ['$scope', function($scope, myFactory){
	
}]);

controllers.controller('JornadasController', function($scope,$team ){

	

});

controllers.controller('CalendarioController', function($scope,$team  ){
	
 
  $scope.teams= $team.all;

  $scope.send = function(team) {
    $team.addTeam(team);
  };
  
 /* $scope.teamToAdd = {name:''};
  
  $scope.addTeam = function () {
    $scope.teams.push($scope.teamToAdd);
    $scope.teamToAdd = {name:''};
  };*/
  
  $scope.games = function () {
    
    var gamesList = [];
    
    for (var i = 0; i < $scope.teams.length; i++) {
      for (var j = 0; j < $scope.teams.length; j++) {
        if($scope.teams[i] != $scope.teams[j]) {
          gamesList.push({teamA:$scope.teams[i], teamB:$scope.teams[j]});
        }
      }
    }
    
    return gamesList;
  }

	
});

/*
var myGrocery = angular.module('myGrocery', ['firebase']);

myGrocery.controller('GroceryListController',function GroceryListController($scope, $firebaseArray){

  var fireRef = new Firebase('https://groceryappsandino.firebaseio.com');

  $scope.items = $firebaseArray(fireRef);
  $scope.newItem = {name:'', quantity:0};

  //Add Item
  $scope.addItem = function() {
    $scope.items.$add($scope.newItem);
    $scope.newItem = {name:'', quantity:0};
    // for Local Storage
    // Just Serialize object and save in LocalStorage
  };


  //Remove Item
  $scope.removeItem = function(toRemove) {
    $scope.items.$remove(toRemove);
  };


  //Update Item
  $scope.updateItem = function(toUpdate, newName, newQuantity) {
    toUpdate.name = newName;
    toUpdate.quantity = newQuantity;
    $scope.items.$save(toUpdate);
  };


});*/
