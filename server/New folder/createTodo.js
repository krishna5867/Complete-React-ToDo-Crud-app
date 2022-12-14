const Todo = require('../models/todoModel');

const createTodo = async(req,res)=>{
    try{
        const {title, tasks} = req.body;
        if(!title){
            throw new Error("Title is required")
        };
            const newTodo = new Todo({
                title,
                tasks,
            })
        const savedNewTodo = await newTodo.save();
        res.status(201).json({
            success: true,
            message: "todo created successfully",
            newTodo: savedNewTodo
        })
    }catch(err){
        res.send(err.message);
        console.log(err.message);
    }
}
module.exports = createTodo;