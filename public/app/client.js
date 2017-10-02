angular.module('myApp', ['ui.router']);

angular.module('myApp').config([
  '$stateProvider',
  '$locationProvider',
  '$urlRouterProvider',
  function($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/404');
    $stateProvider
      .state('app', {
        url: '/',
        templateUrl: 'app/views/home.html',
        controller: 'AppController',
        controllerAs: 'ctrl'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'app/views/404.html'
      });

    // this is only for removing #!
    $locationProvider.html5Mode(true);
  }
]);
