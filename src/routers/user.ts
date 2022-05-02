import { Router } from "express";
import UserController from "../controllers/user";
import { checkRegistration } from '../middlewares';

export default class UserRoutes {
    init() {
        const routes = Router();
        const controller = new UserController();

        routes.post('/user', [checkRegistration],  controller.store)
        routes.get('/user', controller.index)
        return routes;
    }
}