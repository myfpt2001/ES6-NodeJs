import mongoose from 'mongoose';
const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxLenght: 32,
        required: true
    }
}, { timestamps: true });
module.exports = mongoose.model("Category", CategorySchema)