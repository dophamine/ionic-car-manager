;
(function () {

  angular.module('carman')
    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('tab', {
          abstract: true,
          url: '/tabs',
          templateUrl: 'templates/tabs.html'
        })
        .state('tab.cars', {
          url: '/cars',
          views: {
            'cars': {
              templateUrl: 'templates/cars.html'
            }
          }
        })
        .state('tab.cars-edit', {
          url: '/cars/:id',
          views: {
            'cars': {
              templateUrl: 'templates/cars.edit.html'
            }
          }
        })
        .state('tab.cars-add', {
          url: '/add-car',
          views: {
            'cars-add': {
              templateUrl: 'templates/cars.add.html'
            }
          }
        })

      $urlRouterProvider.otherwise('/tabs/cars');

    });

})();