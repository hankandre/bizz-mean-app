(function() {
  // since we only have one thing we need from the database this service is extremely simple.
  angular.module('myApp').service('AppService', AppService);

  // This is the same as:
  // angular.module('myApp').service('AppService', ['$http', function($http) {}])
  // It's just my preferred method.
  AppService.$inject = ['$http'];

  function AppService($http) {
    this.getListings = function() {
      return $http.get('/api');
    };
  }
})();
