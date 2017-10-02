(function() {
  angular.module('myApp').controller('AppController', AppController);
  // Make sure that you inject your service into your controller! That's given me quite
  // a few headaches in the past.
  AppController.$inject = ['AppService'];

  function AppController(AppService) {
    const $ctrl = this;
    AppService.getListings()
      .then(function(response) {
        // The same as
        // const data = response.data;
        // just a shorter syntax.
        const { data } = response;
        return ($ctrl.listings = data);
      })
      .catch(function(err) {
        // If you do a .then(), always do a .catch() after it, to handle errors.
        return console.error('Error fetching data from database ', err);
      });
  }
})();
