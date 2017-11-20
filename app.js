// call the packages we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

var port = process.env.PORT || 8080;

var router = express.Router();
router.get('/people', function(req, res) {
    var people = [
        {name: 'nykim', url: 'assets/nykim.jpg'},
        {name: 'ddolsoon', url: 'assets/ddolsoon.png'},
        {name: 'water', url: 'assets/fa2ri.jpg'},
        {name: 'newthink', url: 'assets/Happyday.png'},
        {name: 'wschae', url: 'assets/wschae.jpg'},
        {name: 'eyyoun', url: 'assets/eyyoun.gif'},
        {name: 'gla', url: 'assets/gla.gif'},
        {name: 'hwanjoyu', url: 'assets/hwanjoyu.gif'},
        {name: 'hyelee', url: 'assets/hyelee.jpg'},
        {name: 'Jieun', url: 'assets/Jieun.jpg'},
        {name: 'jinhyoukim', url: 'assets/jinhyoukim.png'},
        {name: 'jwkhong', url: 'assets/jwkhong.jpg'},
        {name: 'dwkim', url: 'assets/dwkim.jpg'},
        {name: 'slee', url: 'assets/slee.jpg'},
        {name: 'klee', url: 'assets/klee.jpg'},
        {name: 'syjung', url: 'assets/syjung.png'},
        {name: 'dhson', url: 'assets/dhson.jpg'},
        {name: 'joonhan', url: 'http://cse.postech.ac.kr/eng/wp-content/uploads/2017/05/professor18-168x191.jpg'},
        {name: 'mscha', url: 'assets/mscha.jpg'},
        {name: 'leesy', url: 'http://cse.postech.ac.kr/eng/wp-content/uploads/2017/05/professor12-168x191.jpg'},
        {name: 'woo', url: 'assets/woo.jpeg'},
        {name: 'ko', url: 'assets/postech.jpg'},
        {name: 'lawch', url: 'assets/lawch.png'}, 
        {name: 'dahn', url: 'assets/dhhwang.png'}, 
        {name: 'yongseok', url: 'assets/Yongseok_Park.jpg'},
        {name: 'swparkz', url: 'assets/swparkz.png'},
        {name: 'gsongsong', url: 'assets/sjeon.jpg'},
        {name: 'tak0ya', url: 'assets/tak0ya.jpg'},
        {name: 'kkim', url: 'assets/kkim.jpg'},
        {name:'life', url: 'assets/test.jpg'},
    ];
    res.json(people);
});

 // TODO list model
 //var todos = [
 //   { _id: 1, details: "Finish First Push"},
 //   { _id: 2, details: "Read 'No Silver Bullet'"},
 //   { _id: 3, details: "Study Agile methods"},
 //];
 var todos = [
    "Finish First Push",
    "Read 'No Silver Bullet'",
    "Study Agile methods",
 ];



 //router.get('/todo', function(req, res) {
 //    res.send({
 //        status: 'Items found',
 //        items: todos
 //    });
 //});

 router.get('/todo', function(req, res) {
    res.json(todos);
});

// router.post('/todo', function(req, res){
//     var newItem = {
//         _id: todos[todos.length-1]._id+1,
//         details: req.body.details
//     };

//    todos.push(newItem);
//     res.send({
//         status: 'Items added',
//         item: newItem
//     });
// });

 router.post('/todo', function(req, res){
    todos.push(req.body.newItem);
    res.json(
        { status: 'Item added',
        item: req.body.newItem
    });
 });

 router.delete('/todo/:id', function(req, res){
    var id = req.params['id'];
    todos = todos.filter(function(item) {return item._id != id; });
    res.send({
        status: 'Item deleted',
        itemId: id
    });
 });


app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;