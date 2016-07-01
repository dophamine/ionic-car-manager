;
(function () {

  angular.module('carman')
    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('tab', {
          abstract: true,
          url: '/tabs',
          templateUrl: 'tabs/tabs.html'
        })
        .state('tab.cars', {
          url: '/cars',
          views: {
            'cars': {
              templateUrl: 'tabs/cars/cars.html',
              controller: 'CarsController as vm'
            }
          }
        })
        .state('tab.cars-edit', {
          url: '/cars/:id',
          views: {
            'cars': {
              templateUrl: 'tabs/cars/edit/cars.edit.html',
              controller: 'CarEditController as vm'
            }
          }
        })
        .state('tab.cars-add', {
          url: '/add-car',
          views: {
            'cars-add': {
              templateUrl: 'tabs/add-car/add-car.html',
              controller: 'AddCarController as vm'
            }
          }
        })

      $urlRouterProvider.otherwise('/tabs/cars');

    });

})();