(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController .$inject = ['$scope', '$filter'];
function ToBuyController ($scope, $filter)
{
    var buy = this;
    buy.items = [{ name: "cookies", quantity: 10 },
                 { name: "chips", quantity: 5 },
                 { name: "pizza", quantity: 7 },
                 { name: "candy", quantity: 2 },
                 { name: "nachos", quantity: 1 }
                ];

    buy.buyItem = function(){
        console.log("Bought item")
    };
}

AlreadyBoughtController .$inject = ['$scope', '$filter'];
function AlreadyBoughtController ($scope, $filter)
{
    var bought = this;
    bought.items = [{ name: "ice cream", quantity: 7 },
                    { name: "soda", quantity: 3 }];

}

})();