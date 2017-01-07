(function() {
  'use strict';

  angular.module('MenuApp')
    .component('items', {
      templateUrl: 'src/menuapp/components/items/items.template.html',
      bindings: {
        category: '<',
        items: '<'
      }
    });
})();
