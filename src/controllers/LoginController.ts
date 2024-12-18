import BaseController from "./BaseController";
import LoginService from "../services/LoginService";

class LoginController extends BaseController {
    private loginService = new LoginService()

    index() {
        return this.res.render('login');
    }

    async signIn() {
        const { email, password } = this.req.body;
        
        try {
            const auth = await this.loginService.auth(email, password);
            return this.res.status(auth.statusCode).json(auth);
            
        } catch (error) {
            this.res.status(500).json({ message: 'Erro interno do servidor', statusCode: 500 });
        }
    }
}

export default LoginController;