(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];
function MyInfoController(MenuService) {
  var myinfo = this;
  myinfo.signedUp = true;

  var info = MenuService.getUserInfo();
  myinfo.firstname = info['firstname'];
  myinfo.lastname = info['lastname'];
  myinfo.email = info['email'];
  myinfo.phone = info['phone'];
  myinfo.dish = info['dish'];


  if(info.firstname == "")
  {
    myinfo.signedUp = false;
  }
  else{
    myinfo.signedUp = true;
  }
  console.log(info);

}
})();