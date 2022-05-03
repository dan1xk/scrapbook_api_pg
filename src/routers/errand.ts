import { Router } from "express";
import ErrandController from "../controllers/errand";

export default class ErrandRoutes {
    init() {
        const routes = Router();
        const controller = new ErrandController();

        routes.get('/errand/:id', controller.index);
        routes.post('/errand', controller.store);
        routes.put('/errand/:id', controller.update);
        routes.delete('/errand/:id', controller.delete);

        return routes;
    }
}