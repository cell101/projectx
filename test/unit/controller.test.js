describe('MainController',function(){
    beforeEach(module('demo'));
    it('Should have a todo list',inject(function($controller){
        var scpe ={};
        var myController = $controller('MainController',{$scope:scope});

        myController.list.should.not.empty;
        myController.list.should.contain('Finish First Push');
    }));

    it('Should add a new item',inject(function($controller){
        var scpe ={};
        var myController = $controller('MainController',{$scope:scope});

        scope.addItem("Read 'No Silver Bullet")
        myController.list.should.contain("Read 'No Silver Bullet");
    }));


});

describe('',function(){
    it('',function(){

    });
});
