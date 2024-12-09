import LoginContract from "../contracts/LoginContract";
import BaseController from "./BaseController";

class LoginController extends BaseController implements LoginContract{
    index(): void {
        const user = 'Davi'
        this.res.render('login', { user });
    }

    signIn(): string {

        return 'Logado com sucesso';
    }

}

export default LoginController;