import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/user.js";

const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL).then(()=>{
    console.log("Database connected sucessfully");
    app.listen(PORT,()=>{
        console.log(`server running at PORT${PORT}`);
    });
});

app.use("/api/user",route);