;
(function () {

  angular.module('carman')
    .controller('AddCarController', ['Edmunds', 'carStorage', '$state', '$ionicHistory',
      function (Edmunds, carStorage, $state, $ionicHistory) {
        this.getCar = function (vin) {
          Edmunds.getCarByVin(vin).then(
            function (res) {
              var data = res.data.styleHolder[0];
              carStorage.saveCar(vin, data);

              //move to this car state
              $state.go('^.cars-edit', {
                id: vin
              });
              //clearing history when update
              $ionicHistory.nextViewOptions({
                disableBack: true
              });
            },
            function (err) {

            }
          );
        }

      }
    ])

})();