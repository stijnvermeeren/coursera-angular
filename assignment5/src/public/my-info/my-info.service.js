(function () {
  "use strict";

  angular.module('public')
    .service('MyInfoService', MyInfoService);

  MyInfoService.$inject = [];
  function MyInfoService() {
    var service = this;

    var info = undefined;

    service.setInfo = function(myInfo, favoriteDishData) {
      info = {
        myInfo: myInfo,
        favoriteDishData: favoriteDishData
      };
    };

    service.getInfo = function() {
      return info;
    };
  }


})();
