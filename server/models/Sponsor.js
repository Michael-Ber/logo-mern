import mongoose from "mongoose";

const SponsorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
});

export default mongoose.model("Sponsor", SponsorSchema);