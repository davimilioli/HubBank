import LoginContract from "../contracts/LoginContract";
import BaseController from "./BaseController";

class LoginController extends BaseController implements LoginContract{
    index(): void {
        const user = 'Davi'
        this.res.render('login', { user });
    }

    signIn(): string {
        const { email, password } = this.req.body;
        console.log(email, password);

        this.res.status(200).json({ message: 'Logado com sucesso' });
        return 'Logado com sucesso';
    }

}

export default LoginController;