(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective(){
    var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
          found: '<',
          onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'ctrl',
        bindToController: true
      };
    
      return ddo;
}

function FoundItemsDirectiveController() {
    var ctrl = this;
  
    ctrl.onRemove = function (index) {
        ctrl.found.splice(index.index, 1);
    };
  };

NarrowItDownController.$inject = ['$scope', '$filter', 'MenuSearchService'];
function NarrowItDownController ($scope, $filter, MenuSearchService)
{
    var ctrl = this;
    ctrl.searchTerm = "";
    ctrl.found = [];

    ctrl.searchMenuItems = function (searchTerm) {
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
        promise.then(function (response) {

            ctrl.found = response.data.menu_items;
        })
        .catch(function (error) {
            console.log(error);
        })
    };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath)
{
    var service = this;

    service.getMatchedMenuItems = function()
    {
        var response = $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json"),
          });
      
        return response;

        //TODO - found items list for ones that match search term
    }
}

})();