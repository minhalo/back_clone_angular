import express from "express";
import userController from "../controllers/userController";
import admin from "../middleware/admin"


let router = express.Router();

let initWebRoutes = (app) => {
  //Admin
  //Method GET
  router.get('/api/getAllUser', admin.admin_verify, userController.alluser);

  //Method PUT
  router.put('/api/banUser', admin.admin_verify, userController.banUser);

  //Method DELETE
  router.delete('/api/deleteUser', admin.admin_verify, userController.deleteUser);
  //end Admin

  //Method PUT

  //User


  //All
  //Method GET
  router.get('/api/getSpecificUser', userController.getSpecificUser);

  //Method POST
  router.post('/api/register', userController.handleRegister);
  router.post('/api/login', userController.handleLogin);

  //Method PUT
  router.put('/api/logout', userController.handleLogout);


  return app.use("/", router)
}


module.exports = initWebRoutes
