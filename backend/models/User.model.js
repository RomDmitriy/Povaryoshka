import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    emaild: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});