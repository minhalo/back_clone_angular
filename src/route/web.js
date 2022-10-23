import express from "express";
import userController from "../controllers/userController";
import authenController from "../controllers/authenController";
import dbsController from "../controllers/dbsController";
import roleController from "../controllers/roleController";
import admin from "../middleware/admin"
import formController from "../controllers/formController"
import productController from "../controllers/productController"


let router = express.Router();

let initWebRoutes = (app) => {
  //Admin
  //Method GET
  router.get('/api/getAllUser', admin.admin_verify, userController.alluser);
  router.get('/api/getSpecificUser', admin.admin_verify, userController.getSpecificUser);
  router.get('/api/getAllRole', admin.admin_verify, roleController.getAllRole);

  //Method POST
  router.post('/api/createRole', admin.admin_verify, userController.createRole);
  router.post('/api/createNewUser', admin.admin_verify, authenController.createNewUser);
  router.post('/api/createGender', admin.admin_verify, formController.createGender);
  router.post('/api/createAddress', admin.admin_verify, formController.createAddress);
  router.post('/api/createCategory', admin.admin_verify, productController.createCategory);
  router.post('/api/createList', admin.admin_verify, productController.createList);
  //Method PUT
  router.put('/api/banUser', admin.admin_verify, userController.banUser);
  router.put('/api/updateUser', admin.admin_verify, userController.updateUserByAdmin);
  router.put('/api/updateRole', admin.admin_verify, roleController.updateRole);

  //Method DELETE
  router.delete('/api/deleteUser', admin.admin_verify, userController.deleteUser);
  router.delete('/api/deleteRole', admin.admin_verify, roleController.deleteRole);
  //end Admin

  //Method PUT

  //User

  //All
  //Method GET
  router.get('/api/getGender', formController.getGender);
  router.get('/api/getAddress', formController.getAddress);
  router.get('/api/getCategory', productController.getCategory);

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
