const mongoose = require('mongoose')
const { Schema } = mongoose;
const TodoSchema = new Schema({
    title: String,
    tasks: String,
    taskCompleted:{type:Boolean, default:false},
        createdAt:{type:Date, default:Date()},
        updatedAt:{type:Date, default:Date()}
})
module.exports = mongoose.model("Todo", TodoSchema);