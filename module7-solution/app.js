(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('totalPriceFilter', function(){
    return function(item)
    {
        var total =  item.quantity *  item.pricePerItem;
        return "$$$" + total;
    }
});

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

    var buyItems = [{ name: "cookies", quantity: 10, pricePerItem: 4.00 },
                        { name: "chips", quantity: 5, pricePerItem: 2.00 },
                        { name: "pizza", quantity: 7, pricePerItem: 9.50 },
                        { name: "candy", quantity: 2, pricePerItem: 1.50 },
                        { name: "nachos", quantity: 1, pricePerItem: 7.25 }
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