(function() {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'src/menuapp/states/home/home.template.html'
    });

    $stateProvider.state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/states/categories/categories.template.html',
      controller: 'CategoriesController as categories',
      resolve: {
        data: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    });

    $stateProvider.state('items', {
      url: '/items/{categoryId}',
      templateUrl: 'src/menuapp/states/items/items.template.html',
      controller: 'ItemsController as items',
      resolve: {
        data: [
          'MenuDataService', '$stateParams',
          function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.categoryId);
          }
        ]
      }
    });
  }
})();
