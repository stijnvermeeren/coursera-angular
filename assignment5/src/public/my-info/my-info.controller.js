(function () {
  "use strict";

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['ApiPath', 'MyInfoService'];
  function MyInfoController(ApiPath, MyInfoService) {
    var $ctrl = this;

    $ctrl.info = MyInfoService.getInfo();
    $ctrl.basePath = ApiPath;
  }

})();
