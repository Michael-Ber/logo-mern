import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    { 
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        cort: [
            { 
                type: mongoose.Types.ObjectId,  
                ref: "Cart"
            }
        ] 
    },
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);