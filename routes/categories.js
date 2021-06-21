import express from 'express';
import { create, read, categoriesByID, list, remove, update } from '../controllers/categories';
import { requireSignin, isAuth, isAdmin } from '../controllers/auth';
import { userById } from '../controllers/user'
const router = express.Router();

// add categories
router.post('/categories/:userId', requireSignin, isAuth, isAdmin, create);
//Xoa San Pham
router.delete('/categories/:categoriesID/:userId', requireSignin, isAuth, isAdmin, remove)
    // chi tiet
router.get('/categories/:categoriesID', read)
router.param('categoriesID', categoriesByID);
router.param('userId', userById)
    //list danh sach san pham2
router.get('/categories', list);
// //update san pham
router.put('/categories/:categoriesID/:userId', requireSignin, isAuth, isAdmin, update);



module.exports = router;