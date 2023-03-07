import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import db from "./models/index";
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 3000;
//Gán port 3000 nêu chưa khai báo port
app.listen(port,()=>{
    console.log("Nodejs đang dùng port: " + port);
});