import LoginServiceContract from "../contracts/LoginServiceContract";
import User from "../models/User";
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

class UserService implements LoginServiceContract{

    public async auth(email: string, password: string){
        console.log(email, password);
        
        try {
            const user = await User.findOne({ where: { email } });
            const JWT_TOKEN = process.env.JWT_TOKEN as string;

            let authValid = {
                user: '',
                token: '',
                expiration: ''
            }
            
            if(!user){
                return 'Usuário não existe!';
            }
            
            if(email == user.dataValues.email && password == user.dataValues.senha){
                console.log('Usuário logado com sucesso')
                const token = jwt.sign({email, password}, JWT_TOKEN, {expiresIn: '1H' });
                authValid =  { 
                    user: user.dataValues.nome,
                    token: token,
                    expiration: '1h'
                };
            }
                     
            return authValid;
        } catch(error){
            throw new Error('Erro ao autenticar usuário')
        }

    }
}

export default UserService;