import express from "express"
import todoItem from "../models/todoItem.model.js"

const router = express.Router()

router.get("/", async (req, res)=>{
    try{
        const todos = await todoItem.find()//Fetch all items from collection
        res.status(200).json({success: true, data: todos})
    }catch(err){
        console.error("Error", err.message);
        res.status(500).json({success: false, message: "Failed to fetch data"})
    }
})

router.post("/", async (req, res)=>{
    const {title, description} = req.body
    if(!title || !description){
        return res.status(400).json({success: false, message: "Provide all Feilds"})
    }

  const newTodo = new todoItem({ title, description, isCompleted: false });

    try{
        await newTodo.save()//Save new todo item in database
        res.status(201).json({success: true, data: newTodo})
    }catch(err){
        console.error("Error creating todo item", err.message);
        res.status(500).json({success: false, message: "Server Error"})
    }
})

export default router