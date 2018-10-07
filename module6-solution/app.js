(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter)
{
  $scope.lunchText = "";
  $scope.lunchMessage = "";

  $scope.checkLunch = function(){
    $scope.lunchMessage = "testing";
  };
}




})();