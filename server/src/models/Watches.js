import mongoose from "mongoose";

const WatchSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model:[{ type:String, required: true }],
    year: [{type: Number, required: true}],
    description: {type:String, required: true},
    imageUrl: { type:String, required: true }, 
    price: { type: Number, required: true },
    userOwner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users", 
        required: true, 
    },
});

export const WatchModel = mongoose.model("watches", WatchSchema);