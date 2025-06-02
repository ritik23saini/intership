import mongoose from "mongoose";

const DadminSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: true,
        }
    
    },
    { timestamps: true }
);

const DAdmin = mongoose.model("Admin", DadminSchema);

export default DAdmin;
