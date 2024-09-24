import express from "express"
import dotenv from "dotenv"
import ConnectDB from "./config/db.js"
import router from "./routes/todoItem.route.js"
import path from "path"
const app = express()
const port = process.env.PORT || 8000

app.use(express.json())//Now can use express bodyparser
dotenv.config()//Now can listen to process.env
// console.log(process.env.MONGO_URI);

app.use("/api/todos", router)//Use router handler as middleware

const __dirname = path.resolve()

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist"))) //__dirname points to root

    app.get("*", (req, res)=>{ //If we send any request then render react application which is index.html under dist folder
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html") )
    })


}

app.listen(port, ()=>{
    ConnectDB() //Connect to db as app runs on post
    console.log(`Server running on http://localhost:${port}`);
})