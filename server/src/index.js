import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import { userRouter } from './routes/users.js';
import { watchRouter } from './routes/watches.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/watches", watchRouter);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(3001, () => console.log(`Running on Server Port: 3001 👻 `));
})
.catch((error) => console.log(`${error} did not connect`));

