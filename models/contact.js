import mongoose, { Schema } from 'mongoose';
const productSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxLenght: 32,
        required: true
    },
    email: {
        type: String,
        required: true,
        maxLenght: 2000
    },
    image: {
        type: String
    },
    subject: {
        type: String,
        required: true,
        maxLenght: 2000
    },
    message: {
        type: String,
        required: true,
        maxLenght: 2000
    }

}, { timestamps: true });
module.exports = mongoose.model("Contact", productSchema)