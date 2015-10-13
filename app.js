angular.module('myApp', ['ui.router'])
.config(function($stateProvider,$urlRouterProvider) {
  //default state
  $urlRouterProvider.otherwise("/home");
   //states
  $stateProvider
    .state('primary', {
      url: "/home",
      templateUrl: "home.html",
      controller:"" 
      //controller name for home.html right now its balnk bcz 
      //i havent used any controller for it
    })    
    .state('secondary', {
      url: "/our",
      templateUrl: "our.html"
    });
});