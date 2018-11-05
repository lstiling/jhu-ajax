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
          onRemove: '&',
          nothingFound: '<'
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

        // if user removed the last item then display "Nothing Found!"
        ctrl.nothingFound = ctrl.found.length == 0;
    };
  };

NarrowItDownController.$inject = ['$scope', '$filter', 'MenuSearchService'];
function NarrowItDownController ($scope, $filter, MenuSearchService)
{
    var ctrl = this;
    ctrl.searchTerm = "";
    ctrl.found = [];
    ctrl.nothingFound = ctrl.found.length == 0;

    ctrl.searchMenuItems = function () {
        // if search word is empty don't bother doing http request
        if(ctrl.searchTerm == "")
        {
            ctrl.nothingFound = true;
        }
        else
        {
            var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
            promise.then(function (response) {

                ctrl.found = response;

                // check if there are responses that matched
                ctrl.nothingFound = ctrl.found.length == 0;
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath)
{
    var service = this;

    service.getMatchedMenuItems = function(searchTerm)
    {
        return $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json"),
          }
        ).then(function (result) {
            // process result and only keep items that match
            var foundItems = [];
            
            for(var i = 0; i < result.data.menu_items.length; i++)
            {
                var item = result.data.menu_items[i];
                var description = item.description;
                if (description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    foundItems.push(item);
                }
            }
            
            // return processed items
            return foundItems;
        });
    }
}

})();