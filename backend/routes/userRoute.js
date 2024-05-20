import express from 'express';
import { createAdmin, register, signIn, updateUser } from '../controller/authController';
import { getToken, isAuth } from '../util';

const router = express.Router();

router.put('/:id', isAuth, updateUser);

router.post('/signin', signIn);

router.post('/register', register);

router.get('/createadmin', createAdmin);

export default router;
