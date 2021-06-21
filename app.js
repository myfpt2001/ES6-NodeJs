import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import productRouter from './routes/product';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import categoryRouter from './routes/categories';
import cors from 'cors';
import authRoutes from './routes/auth';
import userRoutes from './routes/user'
// import userRoutes from './routes/user';
import expressevalidator from "express-validator"

//Config
const app = express();
dotenv.config();

//cors co nhiem vu kiem tra xem frontend nao co quyen truy cajp vao duong dan nay

app.use(cors({
    origin: 'http://localhost:4040'
}))

app.use(morgan('dev'));
//chuyeern phan body trong req
app.use(bodyParser.json())
app.use(expressevalidator())
    //Product
app.use('/api', productRouter);
//Categories
app.use('/api', categoryRouter)
    //user
app.use('/api', authRoutes)

app.use('/api', userRoutes)


//Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: false,
    useCreateIndex: true
}).then(() => {
    console.log("DB connected");
});
mongoose.connection.on('Err', (err) => {
    console.log("DB connections failed", `${err.message}`);
})
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Anh:${port}`);
})