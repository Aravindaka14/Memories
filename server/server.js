import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import postRoutes from "./routes/postWidget.js";
import postsRoutes from "./routes/home.js";
import registerRoutes from "./routes/register.js";
import loginRoutes from "./routes/login.js";

const app = express()
const mul = multer();
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(mul.array())
dotenv.config();

//middleware
app.use("/", postRoutes);
app.use("/", postsRoutes);
app.use("/", registerRoutes);
app.use("/", loginRoutes);


//database
let mongoDB = process.env.DB
mongoose.connect(mongoDB).then(() => {
    console.log("Database connected successfully")
}).catch((err) => {
    console.log(err)
})

//server
let port = process.env.PORT || 3006
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server started running at port:${port}`)
    }
})

app.get("/", (req, res) => {
    res.status(200).send("Backend Works")
})
