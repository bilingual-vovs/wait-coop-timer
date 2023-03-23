import express from "express"
import {to, target} from "./setup.js"
let app = express()

app.get("/target-time", (req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", target)
    res.send(to)
    res.end()
})

app.listen(8000, "127.0.0.1", ()=>{
    console.log("Running on port 3000")
})