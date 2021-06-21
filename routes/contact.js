import express from 'express';
import { create, list, remove } from '../controllers/contact';
import { requireSignin, isAuth, isAdmin } from '../controllers/auth';
import { userById } from '../controllers/user'
const router = express.Router();

// add 
router.post('/contact/:userId', requireSignin, isAuth, isAdmin, create);

//Xoa 
router.delete('/contact/:contactID/:userId', requireSignin, isAuth, isAdmin, remove)

router.param('contactID', contactByID)
router.param('userId', userById)

//list 
router.get('/contact', list)



module.exports = router;