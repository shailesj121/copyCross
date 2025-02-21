import express from 'express';
import { configDotenv } from 'dotenv';
import connectDb from './database/index.js';
import cors from 'cors';
import { copytextController } from './controller/copytext.controller.js';

const app = express();
app.use(cors());
app.use(express.json());
configDotenv({
    path: ".env"
})

app.post("/", (req, res)=> copytextController(req, res))
app.get("/", (req, res)=> res.send("Hello World"))

connectDb().then(()=> {
    app.listen(process.env.PORT || 3000, ()=> {
        console.log("server is listening at post " + process.env.PORT)
    })
}).catch((error)=> {
    console.log("error will connecting to database ", error)
})