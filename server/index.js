import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter.js"
import postRouter from "./routers/postRouter.js"

const app = express();
dotenv.config();
const PORT = 5000;

app.use(cors())
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use("/users", userRouter)
app.use("/posts", postRouter)

mongoose.set("strictQuery", true);
app.listen(PORT, ()=> {
    mongoose.connect(`${process.env.DB_CONNECTION}`)
    .then(()=> console.log("connected to db"))
    .catch((err)=> console.log(err))
})