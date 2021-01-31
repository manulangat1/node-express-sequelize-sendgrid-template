import express from 'express';
import AuthController from './AuthController';

const router = express.Router()

router.get('/register',AuthController.registerUser).post('/register',AuthController.registerUser)
router.post('/login',AuthController.login)

export default router;