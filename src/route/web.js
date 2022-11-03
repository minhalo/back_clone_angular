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
  router.get('/api/user/page', admin.admin_verify, userController.alluser);
  router.get('/api/user/page/searchAll', admin.admin_verify, userController.searchAll);
  router.post('/api/user/page/search', admin.admin_verifican, userController.searchPage);
  router.get('/api/user/page/search/Page', admin.admin_verify, userController.searchPageByPage);
  router.get('/api/getSpecificUser', admin.admin_verify, userController.getSpecificUser);
  router.get('/api/getAllRole', admin.admin_verify, roleController.getAllRole);



  //Method POST
  router.post('/api/searchRole', admin.admin_verifican, roleController.searchRole);
  router.post('/api/getUpdateUser', admin.admin_verifican, userController.getUpdateUser);
  router.post('/api/createRole', admin.admin_verifican, userController.createRole);
  router.post('/api/createNewUser', admin.admin_verifican, authenController.createNewUser);
  router.post('/api/createGender', admin.admin_verifican, formController.createGender);
  router.post('/api/createAddress', admin.admin_verifican, formController.createAddress);
  router.post('/api/createCategory', admin.admin_verify, productController.createCategory);
  router.post('/api/createList', admin.admin_verify, productController.createList);
  router.post('/api/createProduct', admin.admin_verify, productController.createProduct);
  //Method PUT
  router.patch('/api/banUser', admin.admin_verifican, userController.banUser);
  router.put('/api/updateUser', admin.admin_verifican, userController.updateUserByAdmin);
  router.put('/api/updateRole', admin.admin_verify, roleController.updateRole);
  router.put('/api/updateProduct', admin.admin_verify, productController.updateProduct);
  router.put('/api/updateGender', admin.admin_verify, formController.updateGender);
  router.put('/api/updateAddress', admin.admin_verify, formController.updateAddress);

  //Method DELETE
  router.delete('/api/deleteUser', admin.admin_verify, userController.deleteUser);
  router.delete('/api/deleteRole', admin.admin_verify, roleController.deleteRole);
  router.delete('/api/deleteGender', admin.admin_verify, formController.deleteGender);
  router.delete('/api/deleteAddress', admin.admin_verify, formController.deleteAddress);
  //end Admin

  //Method PUT

  //User

  //All
  //Method GET
  router.get('/api/getGender', formController.getGender);
  router.get('/api/getAddress', formController.getAddress);
  router.get('/api/category', productController.getCategory);
  router.get('/api/list', productController.getList);
  router.get('/api/category/list', productController.getListByCat);
  router.get('/api/product', productController.getProduct);
  router.get('/api/category/list/product', productController.getProductByList);
  router.get('/api/product/page', productController.getProductByPage);
  router.get('/api/page', productController.getPage);
  router.get('/api/page/category/list/product', productController.getProductByPageList);
  router.get('/api/user/profile', userController.getProfile);
  //Method POST
  router.post('/api/register', authenController.handleRegister);
  router.post('/api/login', authenController.handleLogin);
  router.post('/api/searchGender', formController.searchGender);
  router.post('/api/searchAddress', formController.searchAddress);
  //Method PUT
  router.get('/api/logout', authenController.handleLogout);

  //drop test

  router.post('/api/dropTable', dbsController.dropTable);
  router.post('/api/createTable', dbsController.createTable);

  return app.use("/", router)
}


module.exports = initWebRoutes
