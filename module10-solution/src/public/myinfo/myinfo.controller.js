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
  myinfo.dishTitle = "";
  myinfo.dishDescription = "";
  myinfo.imageUrl = "";

  var promise = MenuService.getMenuItem(myinfo.dish);
  promise.then(function (response) {   
    myinfo.dishTitle = response.name;
    myinfo.dishDescription = response.description;
    myinfo.imageUrl = "../../../images/menu/" + response.category_short_name + "/" + response.category_short_name + ".jpg";
  })
  .catch(function (error) {
    console.log(error);
  })

 


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