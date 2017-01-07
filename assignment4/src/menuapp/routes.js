(function() {
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
  }
})();
