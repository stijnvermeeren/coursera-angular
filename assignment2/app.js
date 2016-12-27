(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

function ShoppingListCheckOffService() {
  var service = this;

  var items;
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = [
    { name: 'Achel', quantity: 6 },
    { name: 'Westmalle', quantity: 24 },
    { name: 'Westvleteren', quantity: 24 },
    { name: 'Chimay', quantity: 6 },
    { name: 'Rochefort', quantity: 6 },
    { name: 'La Trappe', quantity: 6 }
  ];
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = [];
}


})();
