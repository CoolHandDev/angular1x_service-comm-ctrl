'use strict';

//APPLICATION
angular.module('app.serviceandcontrollers', []);

//CONTROLLER: main controller
angular.module('app.serviceandcontrollers').controller('maincontroller', ['service1', maincontroller]);

function maincontroller(service1) {
    var self = this;

    self.testmodel = service1.service_model;

}

//SERVICE: Service 1
angular.module('app.serviceandcontrollers').factory('service1', [service1]);

function service1() {

    var model1 = {
        value1: 'default'
    };

    return {
        service_model: model1
    }

}

//DIRECTIVE: Directive 1
angular.module('app.serviceandcontrollers').directive('directive1', ['service1', directive1]);

function directive1(service1) {
    return {
        restrict: 'E',
        scope: {},
        compile: compilefunc,
        controller: directive1Controller,
        controllerAs: 'dr1ctrl',
        template: '<div> <input type="button" ng-click="dr1ctrl.sayDirective1()" value="Directive 1"></div>'
    }

    function directive1Controller() {
        console.log('controller step');
        this.sayDirective1 = sayDirective1;

        function sayDirective1() {
            service1.service_model.value1 = 'Hi I was set by the Directive 1';
        }
    }

    function compilefunc() {
        console.log('compile step');
        return {
            pre: prefunc,
            post: postfunc
        }

        function prefunc() {
            console.log('pre-link phase');
        }

        function postfunc() {
            console.log('post-link phase');
        }
    }
}

//DIRECTIVE: Directive 2
angular.module('app.serviceandcontrollers').directive('directive2', ['service1', directive2]);

function directive2(service1) {
    return {
        restrict: 'E',
        scope: {},
        controller: directive2Controller,
        controllerAs: 'dr2ctrl',
        template: '<div> <input type="button" ng-click="dr2ctrl.sayDirective2()" value="Directive 2"></div>'
    }

    function directive2Controller() {
        this.sayDirective2 = sayDirective2;

        function sayDirective2() {
            service1.service_model.value1 = 'Haloo, I was set by the Directive 2';
        }
    }

}


