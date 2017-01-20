(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MyInfoService', 'MenuService'];
  function SignUpController(MyInfoService, MenuService) {
    var $ctrl = this;

    $ctrl.myInfo = {};
    $ctrl.saved = false;

    $ctrl.submit = function() {
      $ctrl.saved = false;

      MenuService.getMenuItem($ctrl.myInfo.favoriteDish).then(
        function(itemInfo) {
          $ctrl.favoriteDishInvalid = false;
          MyInfoService.setInfo($ctrl.myInfo, itemInfo);
          $ctrl.saved = true;
        }
      ).catch(
        function() {
          $ctrl.favoriteDishInvalid = true;
        }
      );
    };
  }

})();
