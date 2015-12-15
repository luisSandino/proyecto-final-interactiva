var controllers = angular.module('allCrFutbol.controllers', []);




controllers.controller('InicioController', ['$scope', function($scope, myFactory){
	
}]);

controllers.controller('TablaController', function($scope, $team){
   $scope.teams= $team.all;

  $scope.send = function(team) {
    $team.addTeam(team);
  };
	
});

controllers.controller('JornadasController', function($scope,$team ){

	 $scope.teams= $team.all;

  $scope.send = function(team) {
    $team.addTeam(team);
  };
  

});

controllers.controller('CalendarioController', function($scope,$team  ){
	
 
  $scope.teams= $team.all;

  $scope.send = function(team) {
    $team.addTeam(team);
    
   
  };

  

  $scope.removeTeam = function(toRemove) {
    $scope.teams.$remove(toRemove);
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

	
});

