;(function() {

  angular.module('carman')
    .controller('CarsEditController', ['$state', 'carStorage', '$stateParams', function($state, carStorage, $stateParams) {
      //get current object by VIN key from $stateParams
      var current = carStorage.cars[$stateParams.id];
      //make a copy of "current" for bypass ng-model changes to storage
      this.car = angular.copy(current);

      //save changes by copying to orginal object
      this.saveCar = function(data) {
        for (var key in data) {
          current[key] = data[key];
        }
        console.log(current.year)
        //move to the cars list
        $state.go('tab.cars');
      }

      this.years = getRangeOfYears(1980);
      //prepare array of years
      function getRangeOfYears(begin) {
        var now = new Date().getFullYear();
        var temp = [];
        for (var i = begin; i <= now; i++) {
          temp.push(i)
        }
        return temp;
      }

    }])

})();