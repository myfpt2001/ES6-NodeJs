import express from 'express';
const router = express.Router();

import { signup, signin, signout } from "../controllers/auth";
import { userSignupValidator } from "../validator";

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);
module.exports = router;