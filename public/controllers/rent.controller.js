myApp.controller('RentController', function(RentService){
    var vm = this;
    RentService.getRent();
    console.log('RentController');

    vm.addRent = function() {
        console.log('in addRent of Rent Controller');
        var rentToAdd = {
            sqft: sqftIn,
            city: cityIn,
            rentcost: vm.rentIn 
        };
        RentService.addRent(rentToAdd);
    };

    vm.handfulOfRent = RentService.rentStuff;

})










// db.getCollection('listings').find({rent: {$exists:true}});