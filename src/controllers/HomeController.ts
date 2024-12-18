import BaseController from "./BaseController";

class HomeController extends BaseController{
    index(){
        this.res.render('home')
    }
}

export default HomeController;