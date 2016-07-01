;
(function () {
	//slice last symbols and return them
  angular.module('carman')
    .filter('slice', function () {
      return function (input, cut) {
        cut = cut || 7;
        return input.slice( input.length - (cut + 1) );
      }
    });

})();