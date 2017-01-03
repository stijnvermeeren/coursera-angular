(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .service('MenuSearchService', MenuSearchService)
    .controller('NarrowItDownController', NarrowItDownController)
    .directive('foundItems', foundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowItDown = this;

    narrowItDown.searchTerm = '';
    narrowItDown.found = [];

    narrowItDown.getMatchedMenuItems = function() {
      if (narrowItDown.searchTerm) {
        MenuSearchService
          .getMatchedMenuItems(narrowItDown.searchTerm)
          .then(function(found) {
            narrowItDown.found = found;
          });
      } else {
        narrowItDown.found = [];
      }
    };

    narrowItDown.remove = function(index) {
      narrowItDown.found.splice(index, 1);
    };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        'url': 'https://davids-restaurant.herokuapp.com/menu_items.json'
      })
      .then(function(response) {
        return response.data.menu_items.filter(function(item) {
          return (item.description.toLowerCase().indexOf(searchTerm) !== -1);
        });
      });
    }
  }

  foundItemsDirective.$inject = [];
  function foundItemsDirective() {
    return {
      'templateUrl': 'foundItems.html',
      'scope': {
        found: '<',
        onRemove: '&'
      }
    }
  }
})();
