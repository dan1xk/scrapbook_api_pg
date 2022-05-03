import { Router } from "express";
import LoginController from "../controllers/login";

export default class LoginRoutes {
    init() {
        const routes = Router();
        const controller = new LoginController();

        routes.post('/login', controller.login);
        routes.post('/loginAuth', controller.authLogin);
       
        return routes;
    }
}