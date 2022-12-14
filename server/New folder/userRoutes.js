const express = require('express');

const home = require('../controllers/home')
const createTodo = require('../controllers/createTodo')
const getTodo = require('../controllers/getTodo')
const getTodos = require('../controllers/getTodos')
const createTodoTask = require('../controllers/createTodoTask');
const deleteTodo = require('../controllers/deleteTodo');
const deleteTodoTask = require('../controllers/deleteTodoTask');
const editTodoTitle = require('../controllers/editTodoTitle');
const editTodoTask = require('../controllers/editTodoTask');

const router = express.Router();

router.get('/', home)
router.post('/createTodo', createTodo);
router.get('/getTodo', getTodo)
router.post('/createTodos', createTodos);
router.get('/getTodo', getTodo) 
router.get('/getTodo/:todoId', getTodo)
router.post('/createTodoTask/:todoId', createTodoTask);
router.delete('/deleteTodo/:todoId', deleteTodo)
router.delete('/deleteTodoTask/:todoId', deleteTodoTask)
router.put('/editTodoTitle/:todoId', editTodoTitle);
router.put('/editTodoTask/:todoId', editTodoTask)

module.exports = router;