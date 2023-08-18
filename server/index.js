import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRouter from "./routes/auth.js";
import goodsRouter from "./routes/goods.js";
import sponsorsRouter from "./routes/sponsors.js";

const app = express();
dotenv.config();

//VARS
const db_name = process.env.DB_NAME;
const port = process.env.PORT || 3005;

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api/auth", authRouter);
app.use("/goods", goodsRouter);
app.use("/sponsors", sponsorsRouter);

async function start() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}@clusterzlatmax.kdrp7zk.mongodb.net/${process.env.DB_NAME}`);
        app.listen(port, () => console.log(`Server working on port: ${port}`))
    } catch (error) {   
        console.log(`Server error: ${error}`)
    }
}

start();
