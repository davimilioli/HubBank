import LoginContract from "../contracts/LoginContract";
import BaseController from "./BaseController";
import UserService from "../services/UserService";
import ResponseHandler from "../utils/ResponseHandler";

class LoginController extends BaseController implements LoginContract {
    index(): void {
        this.res.render('login');
    }

    async signIn(): Promise<void> {
        const { email, password } = this.req.body;
        const userService = new UserService();

        try {
            const auth = await userService.auth(email, password);
            this.res.status(auth.statusCode).json(auth)
        } catch (error) {
            this.res.status(500).json(ResponseHandler.error('Erro interno do servidor', 500));
        }
    }
}

export default LoginController;