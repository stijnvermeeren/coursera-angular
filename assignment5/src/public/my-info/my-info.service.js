(function () {
  "use strict";

  angular.module('public')
    .service('MyInfoService', MyInfoService);

  MyInfoService.$inject = [];
  function MyInfoService() {
    var service = this;

    var myInfo = undefined;

    service.setInfo = function(info) {
      myInfo = info;
    };

    service.getInfo = function() {
      return myInfo;
    };
  }


})();
