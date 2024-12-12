interface LoginContract {
    index(): void;
    signIn(): Promise<void>;
}
 
export default LoginContract