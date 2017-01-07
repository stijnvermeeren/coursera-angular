(function() {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['data'];
  function ItemsController(data) {
    var items = this;
    items.items = data.menu_items;
    items.category = data.category;
  }
})();

