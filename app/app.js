angular.module('siteApp', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
          templateUrl: './app/scripts/home/home.html',
          controller: 'homeCtrl'
      })
      .when('/history', {
          templateUrl : './app/scripts/history/history.html',
          controller  : 'historyCtrl'
      })
      .when('/work', {
          templateUrl : './app/scripts/work/work.html',
          controller  : 'workCtrl'
      })
      .when('/about', {
          templateUrl : './app/scripts/about/about.html',
          controller  : 'aboutCtrl'
      })      
      .otherwise({redirectTo:'/about'});

      /*$locationProvider.html5Mode(true);*/

  });