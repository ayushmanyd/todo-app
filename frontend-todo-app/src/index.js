// Backend Server using Express

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());

app.use(bodyParser.json());

let todos = [];

function findIndex(arr, todoID) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].todoID === todoID) return i;
    }
    return -1;
}

function removeAtIndex(arr, index) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== index) newArray.push(arr[i]);
    }
    return newArray;
}

app.get('/todos', (req, res) => {
    res.json(todos);
})

app.get('/todos/:todoID', (req, res) => {
    const todoIndex = findIndex(todos, parseInt(req.params.todoID));
    if (todoIndex === -1) {
        res.status(404).send('Error!');
    }
    else {
        res.json(todos[todoIndex]);
    }
})

var id = 1;
app.post('/todos', (req, res) => {
    const newTodo = {
        todoID: id,
        todoTitle: req.body.todoTitle,
        todoDescription: req.body.todoDescription
    };
    id++;
    todos.push(newTodo);
    res.status(201).json(newTodo);
})

app.put('/todos/:todoID', (req, res) => {
    const todoIndex = findIndex(todos, parseInt(req.params.todoID));
    if (todoIndex === -1) {
        res.status(404).send('Error!');
    }
    else {
        todos[todoIndex].todoTitle = req.body.todoTitle;
        todos[todoIndex].todoDescription = req.body.todoDescription;
        res.json(todos[todoIndex]);
    }
})

app.delete('/todos/:todoID', (req, res) => {
    const todoIndex = findIndex(todos, parseInt(req.params.todoID));
    if (todoIndex === -1) {
        res.status(404).send('Error! Not Present');
    }
    else {
        todos = removeAtIndex(todos, todoIndex);
        res.status(200).send('Successfully Deleted');
    }
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
