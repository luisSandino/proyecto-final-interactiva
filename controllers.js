var controllers = angular.module('allCrFutbol.controllers', []);

/*allCrFutbol.factory('miFabrica', function(){
	return {name:''}
})*/




controllers.controller('InicioController', ['$scope', function($scope, myFactory){
	
}])

controllers.controller('TablaController',  ['$scope', function($scope, myFactory){
	
}])

controllers.controller('JornadasController', ['$scope', function($scope, myFactory){

	

}])

controllers.controller('CalendarioController', ['$scope', function($scope, myFactory){
	


  $scope.teams = [];
  $scope.teamToAdd = {name:'', provincia:''};
  
  $scope.addTeam = function () {
    $scope.teams.push($scope.teamToAdd);
    $scope.teamToAdd = {name:'', provincia:''};
  };
  
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

	
}]);
