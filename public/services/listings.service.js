myApp.service('RentService', function($http) {
    var rs = this;


    console.log('rent service');

    rs.getRent = function(rent) {
        $http({
            method: 'GET',
            url: '/rent'
        }).then(function(response){
            console.log('response', response);
            rs.rentStuff = {rent: response.data};
        });
    }
})