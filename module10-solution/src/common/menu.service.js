(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.userInfo = {
    'firstname' : "",
    'lastname' : "",
    'email' : "",
    'phone' : "",
    'dish' : ""
  };

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


  service.getMenuItem = function(shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json')
    .then(function(response) {
      return response.data;
    });
  };

  service.saveUserInfo = function(firstname, lastname, email, phone, dish) {

    service.userInfo = {
      'firstname' : firstname,
      'lastname' : lastname,
      'email' : email,
      'phone' : phone,
      'dish' : dish
    };
  };

  service.getUserInfo = function(firstname, lastname, email, phone, dish) {

    return service.userInfo;
  };
}

})();
