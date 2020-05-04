const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.port || 8080;

app.use(morgan('tiny'));
const PASSWORD = process.env.PASSWORD;
const mongoDBURI = 'mongodb+srv://ksquared238:'+PASSWORD+'@cluster0-pyteb.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("Mongoose is connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Schema = mongoose.Schema;
const TodoSchema = new Schema({
    id: String,
    isCompleted: Boolean,
    message:String
})

const Todo = mongoose.model('Todo', TodoSchema);


app.post('/api/save', (req, res) => {
    console.log(req.body);

    const data = req.body;

    const newTodo = new Todo(data);


    newTodo.save((error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("DATA HAS BEEN SAVED");
        }

    })
    res.json(data);
});

app.post('/api/complete', (req, res) => {

    let value = req.body;
    value.isCompleted = !value.isCompleted
    console.log(value);
    const data = {
        $set: {
            isCompleted: !value.isCompleted
        }
    }
    Todo.updateOne(value, data, function (err) {
        if (err) console.log(err);
        console.log("Successful UPDATE");
    });
    res.json(req.body);
});


app.post('/api/remove', (req, res) => {
    console.log(req.body);
    Todo.deleteOne(req.body.id1, function (err) {
        if (err) console.log(err);
        console.log("Successful deletion");
    });

    res.json(req.body);
});


app.get('/api/todos', (req, res) => {

    Todo.find({ })
        .then((data) => {
            console.log('Data ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });

});

app.listen(port, () => console.log(`Server started on port ${port}`));