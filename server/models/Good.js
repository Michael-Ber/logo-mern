import mongoose from "mongoose";

const GoodSchema = new mongoose.Schema(
    { 
        title: {
            type: String,
            required: true
        },
        descr: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        oldCost: {
            type: Number,
            required: true
        }, 
        newCost: {
            type: Number,
            required: true
        },
        speed: {
            type: Number,
        },
        folding: {
            type: Boolean
        },
        imgUrl: {
            type: String
        } 
    }
);

export default mongoose.model("Good", GoodSchema);