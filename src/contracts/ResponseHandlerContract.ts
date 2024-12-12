interface ResponseHandlerContract {
    success<T>(message: string, data?: T): void;
    error<T>(message: string, errorCode?: number, data?: T): void;
}
 
export default ResponseHandlerContract;