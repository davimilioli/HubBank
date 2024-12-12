import LoginServiceContract from "../contracts/LoginServiceContract";
import User from "../models/User";
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import ResponseHandler from "../utils/ResponseHandler";

class UserService implements LoginServiceContract {

    public async auth(email: string, password: string) {
        try {
            const user = await User.findOne({ where: { email } });

            if (!user) {
                return ResponseHandler.error("Usuário não existe", 404);
            }

            const { senha, nome } = user.dataValues;
            const JWT_SECRET = process.env.JWT_TOKEN as string;

            if (password === senha) {
                const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
                return ResponseHandler.success("Login feito com sucesso", 200, {
                    user: nome,
                    token,
                    expiration: "1h",
                });
            }

            return ResponseHandler.error("Credenciais inválidas", 401);
        } catch (error) {
            console.error("Erro ao autenticar:", error);
            throw ResponseHandler.error("Erro interno no servidor", 500);
        }
    }
}

export default UserService;