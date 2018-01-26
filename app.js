// call the packages we need
require('newrelic');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// DB CONNECTION
var mongoose = require('mongoose');
//var dbURI = process.env.MONGODB || 'mongodb://your-db-uri';
var dbURI = process.env.MONGODB || 'mongodb://dbadmin:dbadmin@ds115768.mlab.com:15768/teampxtodo';
mongoose.connect(dbURI);
mongoose.connection.on('connected', function(){
    console.log('Mongoose connected');
});
mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

var port = process.env.PORT || 8080;

var router = express.Router();
router.get('/people', function(req, res) {
    var people = [
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
        {name: 'gsongsong', url: 'assets/sjeon.jpg'}
    ];
    res.json(people);
});

/* var todos = [
    "Finish First Push",
    "Read 'No Silver Bullet'",
    "Study Agile methods",
];
 */

// defeine model
var todos = mongoose.model('Todo', { item: String });

router.get('/todo', function(req, res) {
//    res.json(todos);
    // use mongoose to get all todo items in the DB
    todos.find(function(err, all){
        if (err){
            res.send(err);
        }
        res.json(all);
    });
});

router.post('/todo', function(req, res) {
 //   todos.push(req.body.newItem);

// creat a todo item
    todos.create({item: req.body.newItem}, function(err, data){
      if (err) {
          res.send(err);
        }

    res.json({
            status: 'Item added',
            //item: req.body.newItem
            item :data
        });
    });
});

/* 
router.delete('/todo/:item', function(req, res) {
    var id = req.params['item'];
    todos = todos.filter(function (item) { return item != id; });
    res.send({
        status: 'Item deleted',
        item: id
    });
});
*/
router.delete('/todo/:id', function(req, res) {
    // remove atodo
    todos.remove({ _id:req.params['id']}, function(err, data){
        if (err)
        {
            res.send(err);
        }
        res.json({
            status: 'Item deleted',
            item: data
        });
    });
});

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;
