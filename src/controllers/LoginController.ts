import BaseController from "./BaseController";
import LoginService from "../services/LoginService";

class LoginController extends BaseController {
    index() {
        this.res.render('login');
    }

    async signIn() {
        const { email, password } = this.req.body;
        const loginService = new LoginService();

        try {
            const auth = await loginService.auth(email, password);
            this.res.status(auth.statusCode).json(auth);
        } catch (error) {
            this.res.status(500).json({ message: 'Erro interno do servidor', statusCode: 500 });
        }
    }
}

export default LoginController;