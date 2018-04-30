const express = require('express');
const morgan = require('morgan');

const app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json());//makes the bodyParser a "middleware" to allow us to use req.body

var array = [
    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
    }
];

// add your code here
app.get('/', function (req, res) {
    var object = {
        status: 'ok'
    };
    res.status(200).send(object);
});


app.get('/api/TodoItems', function (req, res) {
    res.status(200).send(array);
});

app.get('/api/TodoItems/:number', function (req, res) {

    for(let i = 0; i < array.length; i++){
        if(req.params.number == array[i].todoItemId){
         var object = array[i];
        console.log(object);
        }
    }
    res.status(200).send(object);
});

app.post('/api/TodoItems/', function (req, res) {

    var inArray = false;

    for (let i = 0; i < array.length; i++) {

        if (req.body.todoItemId === array[i].todoItemId) {

            array.splice([i], 1, req.body)

           inArray = true;
        }
    }

    if (inArray === false) {
        array.push(req.body);
    }

    res.status(201).send(req.body);
    console.log(array);
});


app.delete('/api/TodoItems/:number', function (req, res) {

    const id = req.params.number;

    for (let i = 0; i < array.length; i++) {
        if (id == array[i].todoItemId) {
            var splicedArray = array[i];
            array.splice([i], 1);
        }
    }  
   // res.status(200).send(splicedArray);
        res.status(200).send(splicedArray);
        console.log(splicedArray);

});

module.exports = app;
