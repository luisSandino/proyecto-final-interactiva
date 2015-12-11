var myFactory= angular.module('allCrFutbol.myFactory',['firebase']);

 myFactory.factory( '$team', function($firebase,$firebaseArray,$firebaseObject){

var fireRef = new Firebase('https://tabla-posiciones.firebaseio.com/');
var teams = $firebaseArray(fireRef.child('teams')); 


  
   var addTeam = function (team) {
    
    return teams.$add(team);
  };


  return {
    all: teams, 
    addTeam: addTeam
  };

});
  





  