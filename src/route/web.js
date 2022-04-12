import express from "express";
import homecontroller from "../controllers/homeController";
import userController from "../controllers/userController";



let router = express.Router();

let initWebRoutes = (app) => {
    //Method GET
    router.get("/", homecontroller.getHomepage);
    router.get('/api/getFusers', userController.fusers)
    router.get('/api/get-users', userController.handleGetusers);
    router.get('/api/box', userController.handleGetbox) 
    router.get('/api/header', userController.getHeader)
    router.get('/api/allusers', userController.allusers)
    router.get('/api/getSearch', userController.search)
    router.get('/api/getfri', userController.fri)
    router.get('/api/getser', userController.ser)
    router.get('/api/bre', userController.bre)
    router.get('/api/getReqFr', userController.getReqFt)
    router.get('/api/rendom', userController.rendom)
    router.get('/api/count', userController.count)
    router.get('/api/kdp', userController.kdp)
    router.get('/api/dmm', userController.dmm)
    router.get('/api/messa', userController.messa)
    router.get('/api/getnamegr', userController.getnamegr)
    router.get('/api/listActivate', userController.ListActivate)
    router.get('/api/listpost', userController.listpost)
    router.get('/api/listcomment', userController.comment)
    router.get('/api/getmanagefr', userController.searchffk)
    router.get('/get/profile', userController.prof)
    router.get('/api/okgr', userController.okgr)
    router.get('/api/searchrequest', userController.searchingfor)




    //Method POST
    router.post('/api/logout', userController.logout);
    router.post('/api/group', userController.group)
    router.post('/api/task', userController.take)
    router.post('/api/activate', userController.activate)
    router.post('/api/creatpost', userController.createpost)
    router.post('/api/commenti', userController.commenti)
    router.post('/api/allFriend', userController.allFriend)
    router.post('/api/forgot', userController.handleForgot)
    router.post('/api/login', userController.handleLogin);
    router.post('/api/refresh', userController.handlePost)
    router.post('/api/register', userController.handleRegister); 
    router.post('/api/accept', userController.accept)
    

    //Method PUT
    router.put('/api/like', userController.like)
    router.put('/api/dislike', userController.dislike)
    router.put('/api/get-edit', userController.handlePut);
    router.put('/api/change', userController.handleChange)
    router.put('/api/get-password', userController.handlePassword);

   
    //Method DELETE
    router.delete('/api/getdelFusers', userController.delfusers)
    router.delete('/api/delete-users', userController.handleDelete)
    router.delete('/api/deleteAff', userController.deleteaff)
    router.delete('/api/deleteGr', userController.deleteGr)

    return app.use("/", router)
}


module.exports = initWebRoutes
