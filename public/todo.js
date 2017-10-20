var demoApp = angular.module('demo', []);
//demoApp.controller('MainController', ['$scope', function($scope){
demoApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
    // setup a view model 
    var vm = {};
    //vm.list = [
    // { _id: 1, details: "Finish First Push"},
    // { _id: 2, details: "Read 'No Silver Bullet'"}
    //];
    $http.get('/api/todo').then(function(response){
        vm.list = response.data.items;
    });

    vm.newItemDetails = '';

        vm.addItem = function() {
         // TODO: send to the server
        // vm.list.push({
         //    _id: vm.list[vm.list.length-1]._id +1,
         //    details: vm.newItemDetails   
         //});
         //vm.newItemDetails = '';
        //};
         var item = {
             details: vm.newItemDetails
         };
         $http.post('/api/todo', item).then(function(response){
             vm.list.push(response.data.item);
         });
         vm.newItemDetails = '';
        };
        
       vm.removeItem = function(id) {
           // TODO: delete from the server
           vm.list = vm.list.filter(function (item) { return item._id !==id; });
           $http.delete('/api/todo/'+id);
       };


    // expose vm using $scope
    $scope.vm = vm;
    }]);

