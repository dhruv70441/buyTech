import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

// Create an index on the 'email' field to speed up lookups
userSchema.index({ email: 1 });

const User = mongoose.model("User", userSchema);

export default User;
