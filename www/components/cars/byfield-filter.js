;
(function () {

  angular.module('carman')
    .filter('byField', function () {
      return function (input, cut) {
        cut = cut || 7;
        return input.slice( input.length - (cut + 1) );
      }
    });

})();