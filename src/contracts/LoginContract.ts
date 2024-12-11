interface LoginContract {
    index(): void;
    signIn(): Promise<string>;
}
 
export default LoginContract