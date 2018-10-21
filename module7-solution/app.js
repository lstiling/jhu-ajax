(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController .$inject = ['$scope', '$filter', 'ShoppingListCheckOffService'];
function ToBuyController ($scope, $filter, ShoppingListCheckOffService)
{
    var buy = this;
    buy.items = ShoppingListCheckOffService.getBuyItems();

    buy.buyItem = function(index){
        ShoppingListCheckOffService.buyItem(index);
    };
}

AlreadyBoughtController .$inject = ['$scope', '$filter', 'ShoppingListCheckOffService'];
function AlreadyBoughtController ($scope, $filter, ShoppingListCheckOffService)
{
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService()
{
    var service = this;

    var buyItems = [{ name: "cookies", quantity: 10 },
                        { name: "chips", quantity: 5 },
                        { name: "pizza", quantity: 7 },
                        { name: "candy", quantity: 2 },
                        { name: "nachos", quantity: 1 }
                    ];

    var boughtItems = [];

    service.buyItem = function(index){
        boughtItems.push(buyItems[index]);
        buyItems.splice(index, 1);
        
    };

    service.getBuyItems = function()
    {
        return buyItems;
    }

    service.getBoughtItems = function()
    {
        return boughtItems;
    }
}

})();