/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 19.01.15
 * Time: 22:15
 * To change this template use File | Settings | File Templates.
 */
angular
    .module('app')
    .factory('Friends', ['$http', function($http) {
        return {
            get: function() {
                return $http.get('/2iZpG87HNCsNxagG/friends.json').then(function(response) {
                    return response.data;
                });
            }
        };
    }])
