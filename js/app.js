/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 19.01.15
 * Time: 22:15
 * To change this template use File | Settings | File Templates.
 */
angular.module('enterprise', ['ngRoute']).
    config(function($routeProvider) {
        $routeProvider.
            when("/", {templateUrl:"partials/list.html"})
    })

function AppCtrl($scope)    {
    $scope.crew =   [
            {name: "Picard", description:"Captain"},
            {name: "Andrew", description:"Cat"},
            {name: "Busygun", description:"Soldier"}
        ];

}
