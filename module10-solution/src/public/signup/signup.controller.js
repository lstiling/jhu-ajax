(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);


function SignUpController() {
  var signup = this;

  signup.submit = function () {
    signup.completed = true;
  };
}

})();
