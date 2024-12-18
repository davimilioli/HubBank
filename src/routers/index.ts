import { Router } from "express";
import LoginController from "../controllers/LoginController";
import HomeController from "../controllers/HomeController";

const router = Router();

router.get('/', (req, res) => {
    const homeController = new HomeController(req, res);
    homeController.index();
})

router.get('/login', (req, res) => {
    const loginController = new LoginController(req, res); 
    loginController.index(); 
});

router.post('/login/auth', (req, res) => {
    const loginController = new LoginController(req, res); 
    loginController.signIn(); 
});



export default router;