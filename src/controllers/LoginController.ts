import LoginContract from "../contracts/LoginContract";
import BaseController from "./BaseController";
import UserService from "../services/UserService";

class LoginController extends BaseController implements LoginContract{
    index(): void {
        this.res.render('login');
    }

    async signIn(): Promise<string> {
        const { email, password } = this.req.body;
        const userService = new UserService();
        const userAuth = await userService.auth(email, password);
        console.log(userAuth)

        this.res.status(200).json({ userAuth });
        return 'Logado com sucesso';
    }

}

export default LoginController;