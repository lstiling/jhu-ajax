(function () {

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/templates/home.template.html'
        })

        .state('categories', {
            url: '/categories',
            templateUrl:  'src/templates/categories.template.html',
            controller: 'CategoriesController as catCtrl',
            resolve: {
                categories: ['MenuDataService', function(MenuDataService){
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        .state('items', {
            url: '/items/{id}',
            templateUrl:  'src/templates/items.template.html',
            controller: 'ItemsController as itemsCtrl',
            resolve: {
                items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
                    return MenuDataService.getItemsForCategory($stateParams.id);
                }]
            }
        })
}
})();