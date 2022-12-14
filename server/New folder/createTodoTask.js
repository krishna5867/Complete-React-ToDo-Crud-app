const Todo = require('../models/todoModel');

const createTodoTask = async (req, res) => {
    try {
        const { todoId } = req.params;
        const TodoExists = await Todo.findById(todoId);
        if (!TodoExists) {
            res.status(400).send("Doesn't have Todo")
        }
        const todo = await Todo.findById(todoId);
        // Add task 
        const {text} = req.body;
        todo.tasks.push(text);
        await todo.save();
        res.status(200).json({
            success: true,
            message: "successfully created task",
            todo
        })
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = createTodoTask;