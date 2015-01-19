/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 19.01.15
 * Time: 22:15
 * To change this template use File | Settings | File Templates.
 */
angular
    .module('app', [
        'ui.router'
    ])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'partials/about.html',
                controller: 'aboutCtrl'
            })
    }])
