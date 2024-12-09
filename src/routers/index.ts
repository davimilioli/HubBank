import { Router } from "express";
import LoginController from "../controllers/LoginController";

const router = Router();

router.get('/login', (req, res) => {
    const loginController = new LoginController(req, res); 
    loginController.index(); 
});

router.post('/login/auth', (req, res) => {
    const loginController = new LoginController(req, res); 
    loginController.signIn(); 
});



export default router;