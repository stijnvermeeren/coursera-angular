(function() {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.itemsInput = '';
  $scope.message = '';
  $scope.checkIfTooMuch = function() {
    console.log(countItems($scope.itemsInput));
    if ($scope.itemsInput == '') {
      $scope.message = 'Please enter data first';
    } else if (countItems($scope.itemsInput) <= 3) {
      $scope.message = 'Enjoy!';
    } else {
      $scope.message = 'Too much!';
    }
  };
}

function countItems(inputString) {
  return inputString.split(',').length;
}

})();
