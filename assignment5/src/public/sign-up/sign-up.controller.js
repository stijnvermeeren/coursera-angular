(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MyInfoService'];
  function SignUpController(MyInfoService) {
    var $ctrl = this;

    $ctrl.myInfo = {};

    $ctrl.submit = function() {
      MyInfoService.setInfo($ctrl.myInfo);
    };
  }

})();
