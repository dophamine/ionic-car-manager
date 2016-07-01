;
(function () {

  angular.module('carman')
    .factory('Edmunds', ['$http',
      function ($http) {
        var edmunds = {};

        edmunds.getCarByVin = getCarByVin;

        function getCarByVin(vin) {
          var api_key = '9ez3tx9ms6tunncyvyah9pbr';
          
          var config = {
            method: 'GET',
            url: 'http://api.edmunds.com/v1/api/toolsrepository/vindecoder',
            params: {
              fmt: 'json',
              api_key: api_key,
              vin: vin
            }
          };

          return $http(config);
        }

        return edmunds;
      }
    ])

})();