(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signup = this;
  signup.favoriteDish = "";
  signup.favoriteDishExists = true;

  signup.firstname = "";
  signup.lastname = "";
  signup.email = "";
  signup.phone = "";

  signup.submit = function () {
    if(signup.favoriteDish)
    {
      var promise = MenuService.getMenuItem(signup.favoriteDish);
      promise.then(function (response) {
            
          signup.favoriteDishExists = response;
          console.log(response);

          MenuService.saveUserInfo(signup.firstname, signup.lastname, signup.email, signup.phone, signup.favoriteDish);
      })
      .catch(function (error) {
        console.log(error);
        signup.favoriteDishExists= false;
      })
    }
  };
}

})();
