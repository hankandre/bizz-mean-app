(function() {
  angular.module('myApp').controller('AppController', AppController);

  AppController.$inject = ['AppService'];
  function AppController(AppService) {
    const $ctrl = this;
    $ctrl.selection = null;
    AppService.getListings().then(function(response) {
      const { data } = response;
      $ctrl.listings = data;
    });
  }
})();
