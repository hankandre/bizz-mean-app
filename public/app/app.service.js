(function() {
  angular.module('myApp').service('AppService', AppService);

  AppService.$inject = ['$http'];

  function AppService($http) {
    this.getListings = function() {
      return $http.get('/api');
    };
  }
})();
