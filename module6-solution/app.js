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
    var lunchItems = $scope.lunchText.split(',');
    $scope.lunchMessage = getLunchMessage(lunchItems);
  };
}

function getLunchMessage(lunchItems)
{
  if(lunchItems == "")
  {
    return "Please enter data first.";
  }
  else if(lunchItems.length <= 3)
  {
    return "Enjoy!";
  }
  else if(lunchItems.length > 3)
  {
    return "Too Much!";
  }
}
})();