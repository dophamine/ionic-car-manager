;(function() {

  angular.module('carman')
    .controller('CarEditController', ['$state', 'carStorage', '$stateParams', function($state, carStorage, $stateParams) {
      var current = carStorage.cars[$stateParams.id];

      this.car = angular.copy(current);

      this.saveCar = function(data) {
        for (var key in data) {
          current[key] = data[key];
        }
        console.log(current.year)
        $state.go('tab.cars');
      }

      this.years = getRangeOfYears(1980);

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