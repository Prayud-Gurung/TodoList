//File that has schemas of data to store in collection
import mongoose from "mongoose";

const todoItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true//created at, Updated at
})

const todoItem = mongoose.model("todoItem", todoItemSchema) //Create collection called todoItems following schema todoItemSchema
export default todoItem

//More at https://mongoosejs.com/docs/guide.html