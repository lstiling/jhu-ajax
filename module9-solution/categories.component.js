(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'categories.html',
        controller: CategoriesComponentController,
        bindings: {
          categories: '<'
        }
      });

    CategoriesComponentController.$inject = ['MenuDataService'];
    function CategoriesComponentController(MenuDataService){
        var ctrl = this;
        ctrl.categories;
        
        ctrl.searchMenuItems = function () {
            var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
            promise.then(function (response) {
                
                ctrl.categories = response;
            })
            .catch(function (error) {
                console.log(error);
            })
        };
        
    } 
})();