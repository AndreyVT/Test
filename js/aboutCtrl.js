/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 19.01.15
 * Time: 22:30
 * To change this template use File | Settings | File Templates.
 */
angular
    .module('app')
    .controller('aboutCtrl', ['$scope', 'Friends', function($scope, Friends) {
        $scope.title = "About";
        Friends.get().then(function(data) {
            $scope.items = data;
        });
    }]);
