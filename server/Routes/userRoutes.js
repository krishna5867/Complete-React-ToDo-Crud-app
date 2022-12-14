const express = require('express');

const { 
        home,
        createTodo,
        getTodos,
        editTodo,
        deleteTodo,
    } = require('../controllers/createTodos')

const router = express.Router();

router.get('/', home)
router.post('/createTodo', createTodo);
router.get('/getTodos', getTodos)
// router.put('/editTodo/:id', editTodo)
router.delete('/deleteTodo/:id', deleteTodo)


module.exports = router;
