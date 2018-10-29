(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['$scope', '$filter', 'MenuSearchService'];
function NarrowItDownController ($scope, $filter, MenuSearchService)
{
    var narrowItDown = this;
    narrowItDown.searchTerm = "";

    narrowItDown.searchMenuItems = function (searchTerm) {
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

        promise.then(function (response) {

            console.log(response.data);

            //var foundItems;
            //TODO - loop through response for ones that match searchTerm
            //return foundItems;
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
    }
}

})();