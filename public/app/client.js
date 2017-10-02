(function() {
  // I've opted for ui-router instead of ngRoute because it's more widely used that ngRoute.
  angular.module('myApp', ['ui.router']);

  angular.module('myApp').config(appConfig);

  appConfig.$inject = [
    // You use $stateProvider instead of $routeProvider when using ui-router
    '$stateProvider',
    '$locationProvider',
    // $urlRouterProvider is for setting up the fallback route, 404.
    // There's no .otherwise() with ui-router.
    '$urlRouterProvider'
  ];

  function appConfig($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/404');
    $stateProvider
      // You use .state instead of .when with ui-router, and you give the
      // route a name, the url is put inside the object now
      .state('app', {
        // Since we're expecting all the listings in one view, we don't need
        // to complicate things by adding a different route. Everything can be done
        // at the base route.
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
})();
