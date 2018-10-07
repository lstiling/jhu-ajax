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
  var pureLunchItems = filterLunchItems(lunchItems);
  if(pureLunchItems == "")
  {
    return "Please enter data first.";
  }
  else if(pureLunchItems.length <= 3)
  {
    return "Enjoy!";
  }
  else if(pureLunchItems.length > 3)
  {
    return "Too Much!";
  }
}

function filterLunchItems(lunchItems)
{
  var pureLunchItems = lunchItems.filter(function(element) {
    if(element != " ") return element;
  });

  return pureLunchItems;
}

})();