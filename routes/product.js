import express from 'express';
import { requireSignin, isAuth, isAdmin } from '../controllers/auth';
import { userById } from '../controllers/user'
import { create, productByID, read, remove, list, update, photo } from '../controllers/product';
const router = express.Router();

// add products
router.post('/products/:userId', requireSignin, isAuth, isAdmin, create);

//Xoa San Pham
router.delete('/products/:productID/:userId', requireSignin, isAuth, isAdmin, remove)
    //chi tiet
router.get('/products/:productID', read)
router.param('productID', productByID)
router.param('userId', userById)

//anh
router.get('/products/photo/:productID', photo);
//list danh sach san pham2
router.get('/products', list)

// //update san pham
router.put('/products/:productID/:userId', requireSignin, isAuth, isAdmin, update)




module.exports = router;