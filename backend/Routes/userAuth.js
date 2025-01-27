import express from 'express';
import signupController from '../Contollers/signupController.js'
import loginController from '../Contollers/loginController.js'

const router = express.Router()

//signup route || post 
router.post("/signup", signupController)

//login route || post 
router.post("/login",loginController)

export default router;