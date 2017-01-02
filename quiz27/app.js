(function() {
  'use strict';

  angular.module('ScopeTest', [])
    .controller('ScopeTestController', ScopeTestController)
    .directive('defaultDirective', DefaultDirective)
    .directive('trueDirective', TrueDirective)
    .directive('falseDirective', FalseDirective);


  ScopeTestController.$inject = [];
  function ScopeTestController() {
    var scopeTest = this;

    scopeTest.someValue = 42;
  }

  DefaultDirective.$inject = [];
  function DefaultDirective() {
    return {
      restrict: 'E',
      template: '<div>no scope specified</div>',
      link: function(scope) {
        console.log("Directive scope with default scope", scope)
      }
    }
  }

  TrueDirective.$inject = [];
  function TrueDirective() {
    return {
      restrict: 'E',
      template: '<div>scope: true</div>',
      scope: true,
      link: function(scope) {
        console.log("Directive scope with scope: true", scope)
      }
    }
  }

  FalseDirective.$inject = [];
  function FalseDirective() {
    return {
      restrict: 'E',
      template: '<div>scope: false</div>',
      scope: false,
      link: function(scope) {
        console.log("Directive scope with scope: false", scope)
      }
    }
  }
})();
