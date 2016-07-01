;
(function () {

  angular.module('carman')
    .config(function ($stateProvider, $urlRouterProvider) {
      //routing
      $stateProvider
        .state('tab', {
          abstract: true,
          url: '/tabs',
          templateUrl: 'tabs/tabs.html'
        })
        //cars list
        .state('tab.cars', {
          url: '/cars',
          views: {
            'cars': {
              templateUrl: 'tabs/cars/cars.html',
              controller: 'CarsController as vm'
            }
          }
        })
        //car editing view
        .state('tab.cars-edit', {
          url: '/cars/:id',
          views: {
            'cars': {
              templateUrl: 'tabs/cars/edit/cars.edit.html',
              controller: 'CarsEditController as vm'
            }
          }
        })
        //view for new car
        .state('tab.cars-add', {
          url: '/add-car',
          views: {
            'cars-add': {
              templateUrl: 'tabs/add-car/add-car.html',
              controller: 'AddCarController as vm'
            }
          }
        })
      //fallback
      $urlRouterProvider.otherwise('/tabs/cars');

    });

})();