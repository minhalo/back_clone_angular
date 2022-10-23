import express from "express";
import userController from "../controllers/userController";
import authenController from "../controllers/authenController";
import dbsController from "../controllers/dbsController";
import roleController from "../controllers/roleController";
import admin from "../middleware/admin"


let router = express.Router();

let initWebRoutes = (app) => {
  //Admin
  //Method GET
  router.get('/api/getAllUser', admin.admin_verify, userController.alluser);
  router.get('/api/getSpecificUser', admin.admin_verify, userController.getSpecificUser);
  router.get('/api/getAllRole', admin.admin_verify, roleController.getAllRole);



  //Method POST
  router.post('/api/createRole', admin.admin_verify, userController.createRole);

  //Method PUT
  router.put('/api/banUser', admin.admin_verify, userController.banUser);

  //Method DELETE
  router.delete('/api/deleteUser', admin.admin_verify, userController.deleteUser);
  //end Admin

  //Method PUT

  //User


  //All
  //Method GET


  //Method POST
  router.post('/api/register', authenController.handleRegister);
  router.post('/api/login', authenController.handleLogin);

  //Method PUT
  router.put('/api/logout', authenController.handleLogout);




  //drop test

  router.post('/api/dropTable', dbsController.dropTable);
  router.post('/api/createTable', dbsController.createTable);

  return app.use("/", router)
}


module.exports = initWebRoutes
