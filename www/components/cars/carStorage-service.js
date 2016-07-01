;
(function () {

  angular.module('carman')
  //wrap $localStorage for for personal purposes 
    .factory('carStorage', ['$localStorage',
      function ($localStorage) {

        if (!$localStorage.cars) {
          $localStorage.cars = {};
        }
        var cars = $localStorage.cars;

        var carStorage = {};
        carStorage.saveCar = saveCar;
        carStorage.cars = cars;

        //proccess response data
        function saveCar(vin, data) {
          if (cars[vin]) {
            return;
          }
          cars[vin] = {
            id: data.id,
            vin: vin,
            make: data.makeName,
            model: data.modelName,
            year: data.year,
            trim: data.trim.name,
            bodyType: data.categories["Vehicle Style"][0]
          };
          //it use in cases when 'GROSS_VEHICLE_WEIGHT' is undefined
          var attribs = data.attributeGroups.SPECIFICATIONS.attributes;
          if (attribs.hasOwnProperty('GROSS_VEHICLE_WEIGHT')) {
            cars[vin].grossWeight = attribs[GROSS_VEHICLE_WEIGHT].value;
          } else {
            cars[vin].grossWeight = '';
          }

        }

        return carStorage;
      }
    ])

})();