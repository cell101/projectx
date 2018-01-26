describe('MainController', function(){
    beforeEach(module('demo'));
    it('Should have a todo list', inject(function($controller, $httpBackend){
        var scope = {};
        $httpBackend
        .when('GET', '/api/todo')
//        .respond(['Finish First Push']);
        .respond([{item: 'Finish First Push', _id: 0}]);
        var myController = $controller('MainController', {$scope:scope});

        $httpBackend.flush();

        scope.list.should.not.empty;
//        scope.list.should.contain('Finish First Push');
        scope.list.should.deep.contain({item: 'Finish First Push', _id: 0});
    }));

    it('Should add a new item', inject(function($controller, $httpBackend){
        var scope = {};
        $httpBackend
        .when('GET', '/api/todo')
//        .respond(['Finish First Push']);
        .respond([{item: 'Finish First Push', _id: 0}]);
        $httpBackend        
        .when('POST', '/api/todo')
        .respond({
            status: 'Item added',
//            item: "Read 'No Silver Bullet'"
            item: {item: "Read 'No Silver Bullet'", _id: 1}
        });  

        var myController = $controller('MainController', {$scope:scope});

        scope.addItem("Read 'No Silver Bullet");
        $httpBackend.flush();

//        scope.list.should.contain("Read 'No Silver Bullet'");
        scope.list.should.deep.contain({item: "Read 'No Silver Bullet'", _id: 1});
    }));

    it('Should remove a given item', inject(function($controller, $httpBackend){
        var scope = {};
        $httpBackend
        .when('GET', '/api/todo')
//        .respond(['Finish First Push']);
        .respond([{item: "Read 'No Silver Bullet'", _id: 0}]);

        $httpBackend        
//        .when('DELETE', '/api/todo/'+encodeURIComponent('Finish First Push'))
        .when('DELETE', '/api/todo/0')
        .respond({
            status: 'Item deleted',
//            item: 'Finish First Push'
            item: {}
        });  

        var myController = $controller('MainController', {$scope:scope});

//        scope.removeItem('Finish First Push');
        scope.removeItem({item: "Read 'No Silver Bullet'", _id: 0});
        $httpBackend.flush();

//        scope.list.should.not.contain('Finish First Push');
        scope.list.should.deep.not.contain({item: "Read 'No Silver Bullet'", _id: 0});
    }));          
});