interface LoginServiceContract {
    auth(email: string, password: string): void;
}
 
export default LoginServiceContract