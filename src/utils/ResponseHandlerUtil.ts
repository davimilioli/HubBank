class ResponseHandlerUtil {
    static success(message: string, statusCode: number, data: any): { status: string, message: string, statusCode: number, data: any } {
        return {
            status: 'success',
            message,
            statusCode,
            data,
        };
    }

    static error(message: string, statusCode: number): { status: string, message: string, statusCode: number } {
        return {
            status: 'error',
            message,
            statusCode,
        };
    }
}

export default ResponseHandlerUtil;
