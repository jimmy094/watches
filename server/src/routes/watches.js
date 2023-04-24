import express from 'express';
import mongoose from 'mongoose';
import { WatchModel } from "../models/Watches.js";
import { UserModel } from '../models/Users.js';

const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const response = await WatchModel.find({});
        res.json(response)
    } catch (error) {
        res.json(error)
    }
});

router.post("/", async(req, res) => {
    const watch = new WatchModel(req.body)
    try {
        const response = await watch.save();
        res.json(response);
    } catch (error) {
        res.json(error)
    }
});

router.put("/", async(req, res) => {
    try {
    const watch = await WatchModel.findById(req.body.watchID);
    const user = await UserModel.findById(req.body.userID);
    user.savedWatches.push(watch)
    await user.save();
    res.json({savedWatches: user.savedWatches})
} catch (error) {
    res.json(error)
}
});

router.get("/savedWatches/ids", async(req, res) => {
    try {
        const user = await UserModel.findById(req.body.userID)
        res.json({ savedWatches: user?.savedWatches})
    } catch (error) {
        res.json(error)
    }
});

router.get("/savedWatches", async(req, res) => {
    try {
        const user = await UserModel.findById(req.body.userID);
        const savedWatches = await WatchModel.find({
            _id: { $in: user.savedWatches },
        });
        res.json({ savedWatches })
    } catch (error) {
        res.json(error)
    }
});


        

export { router as watchRouter };