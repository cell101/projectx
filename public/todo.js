var demoApp = angular.module('demo', []);
demoApp.controller('MainController', ['$scope', '$http', function($scope, $http){
    $scope.list = [];
    $http.get('/api/todo')
    .then(function(response){
        $scope.list = response.data;
    });
        
    $scope.addItem = function(item) {
        $http.post('/api/todo', {newItem: item})
        .then(function(response){
            $scope.list.push(response.data.item);
            $scope.newItem = '';
        });
    };

    $scope.removeItem = function(item) {
//        $http.delete('/api/todo/' + encodeURIComponent(item))
        $http.delete('/api/todo/' + encodeURIComponent(item._id))
        .then(function(response){
//            $scope.list = $scope.list.filter(function (_item) { return _item != item; });
            $scope.list = $scope.list.filter(function (_item) { return _item._id != item._id; });
        });
    };    
}]);