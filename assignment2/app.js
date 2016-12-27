(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

function ShoppingListCheckOffService() {
  var service = this;

  var toBuy = [
    { name: 'Achel', quantity: '6 bottles' },
    { name: 'Westmalle', quantity: '24 bottles' },
    { name: 'Westvleteren', quantity: '24 bottles' },
    { name: 'Chimay', quantity: '6 bottles' },
    { name: 'Rochefort', quantity: '6 bottles' },
    { name: 'La Trappe', quantity: '6 bottles' }
  ];

  var alreadyBought = [];

  service.getToBuy = function() {
    return toBuy;
  }

  service.getAlreadyBought = function() {
    return alreadyBought;
  }

  service.buy = function(itemIndex) {
    alreadyBought.push(toBuy[itemIndex]);
    toBuy.splice(itemIndex, 1);
  }
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuy();
  toBuy.buy = ShoppingListCheckOffService.buy;
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBought();
}


})();
