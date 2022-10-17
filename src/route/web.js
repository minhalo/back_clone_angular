import express from "express";
import homecontroller from "../controllers/homeController";
import userController from "../controllers/userController";



let router = express.Router();

let initWebRoutes = (app) => {
  //Method GET
  router.get('/api/login', userController.handleLogin);


  //Method POST
  router.post('/api/register', userController.handleRegister);


  //Method PUT



  //Method DELETE

  return app.use("/", router)
}


module.exports = initWebRoutes
