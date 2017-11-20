var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var should = chai.should();

var app = require('../../app.js');


//describe('Array',function(){
 //   describe('indexOf()',function(){
  //      it('should return -1 when the value is not present',function(){
   //         assert.equal(-1, [1,2,3].indexOf(4));
    //        expect([1,2,3].indexOf(4)).to.equal(-1);
     //       [1,2,3].indexOf(4).should.equal(-1);
      //  });
   // 
    //});
//});

describe('loading express', function(){
    it('respond to /', function(done){
        chai.request(app)
        .get('/')
        .end(function(err,res){
            res.should.have.status(200);
            res.text.should.contains('<title>Project X</title>');
            done();
        });
    });
});