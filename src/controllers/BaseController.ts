import { Request, Response } from "express";

class BaseController {
    protected req: Request;
    protected res: Response;

    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
    }
}

export default BaseController;
