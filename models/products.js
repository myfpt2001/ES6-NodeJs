import mongoose, { Schema } from 'mongoose';
import Category from './categories';
const { ObjectId } = Schema.Types;
const productSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxLenght: 32,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLenght: 2000
    },
    price: {
        type: Number,

    },
    shipping: {
        required: true,
        type: Boolean
    },
    image: {
        type: String
    },
    sold: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 0
    },
    category: {
        type: ObjectId,
        ref: Category,
        required: true
    }


}, { timestamps: true });
module.exports = mongoose.model("Product", productSchema)