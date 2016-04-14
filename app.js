'use strict';

//application
angular.module('app.serviceandcontrollers', []);

//main controller
angular.module('app.serviceandcontrollers').controller('maincontroller', maincontroller);

function maincontroller() {
    var self = this;

    self.testmodel = 'hello world model';

}
