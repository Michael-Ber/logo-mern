import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRouter from "./routes/auth.js";
import goodsRouter from "./routes/goods.js";

const app = express();
dotenv.config();

//VARS
const db_name = process.env.DB_NAME;
const port = process.env.PORT;

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api/auth", authRouter);
app.use("/goods", goodsRouter);

async function start() {
    try {
        await mongoose.connect(`mongodb://localhost:27017/${db_name}`);
        app.listen(port, () => console.log(`Server working on port: ${port}`))
    } catch (error) {   
        console.log(`Server error: ${error}`)
    }
}

start();
