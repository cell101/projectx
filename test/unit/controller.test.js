describe('MainController',function(){
    beforeEach(module('demo'));
    it('Should have a todo list',inject(function($controller, $httpBackend){
        var scope ={};
        $httpBackend
        .when('GET', '/api/todo')
        .respond(['Finish First Push']);

        var myController = $controller('MainController',{$scope:scope});

        $httpBackend.flush();

        scope.list.should.not.empty;
        scope.list.should.contain('Finish First Push');
    }));

    it('Should add a new item',inject(function($controller, $httpBackend){
        var scope ={};
        $httpBackend
        .when('GET', '/api/todo')
        .respond(['Finish First Push']);

        $httpBackend
        .when('POST', '/api/todo')
        .respond({
            status: 'Item added',
            item: "Read 'No Silver Bullet'"
        });

        var myController = $controller('MainController',{$scope:scope});

        scope.addItem("Read 'No Silver Bullet'")
        $httpBackend.flush();

        scope.list.should.contains("Read 'No Silver Bullet'");
    }));


});