import ResponseHandler from "../models/ResponseHandler";
interface LoginServiceContract {
    auth(email: string, password: string): Promise<ResponseHandler>;
}
 
export default LoginServiceContract