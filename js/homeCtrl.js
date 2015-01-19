/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 19.01.15
 * Time: 22:30
 * To change this template use File | Settings | File Templates.
 */
angular
    .module('app')
    .controller('homeCtrl', ['$scope', 'Friends', function($scope, Friends) {
        $scope.title = "Home";
        Friends.get().then(function(data) {
            $scope.friends = data;
        });
        $scope.items = ['home','about','contact'];
        $scope.selectedValue = 'home';

        $scope.save = function() {
            $http.post('/api/friends', friends);
        };
    }]);
