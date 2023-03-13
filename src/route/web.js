//Chạy file này đầu tiên khi chạy app
import express from "express";
import homeController from "../controllers/homeController";
// import homeController, { getHomePage } from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app)=>{

    router.get('/',homeController.getHomePage);
    router.get('/crud',homeController.getCrud);
    router.post('/post-crud',homeController.postCrud);
    router.get('/view-crud',homeController.viewCrud);
    return app.use("/", router);
}

module.exports = initWebRoutes;  