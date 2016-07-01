;(function() {

  angular.module('carman')
    .controller('CarsController', ['Edmunds', 'carStorage', function(Edmunds, carStorage) {
      this.cars = carStorage.cars;

      this.filterKey = null;

      
    }])

})();