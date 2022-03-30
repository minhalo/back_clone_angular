import express from "express";
import homecontroller from "../controllers/homeController";
import userController from "../controllers/userController";



let router = express.Router();

let initWebRoutes = (app) => {
    router.post('/api/logout', userController.logout);
    router.get("/", homecontroller.getHomepage);
    router.post('/api/login', userController.handleLogin);
    router.post('/api/register', userController.handleRegister);
    router.put('/api/get-password', userController.handlePassword);
    router.delete('/api/delete-users', userController.handleDelete)
    router.get('/api/get-users', userController.handleGetusers);
    router.put('/api/get-edit', userController.handlePut);
    router.post('/api/forgot', userController.handleForgot)
    router.put('/api/change', userController.handleChange)
    router.get('/api/box', userController.handleGetbox)
    router.post('/api/refresh', userController.handlePost)
    router.get('/api/header', userController.getHeader)
    router.get('/api/allusers', userController.allusers)

    router.post('/api/allFriend', userController.allFriend)
    router.get('/api/getFusers', userController.fusers)
    router.delete('/api/getdelFusers', userController.delfusers)
    router.get('/api/getSearch', userController.search)
    router.get('/api/getfri', userController.fri)
    router.get('/api/getser', userController.ser)
    router.get('/api/bre', userController.bre)
    router.get('/api/getReqFr', userController.getReqFt)
    router.get('/api/rendom', userController.rendom)
    router.get('/api/count', userController.count)
    router.get('/api/kdp', userController.kdp)
    router.post('/api/accept', userController.accept)
    router.get('/get/profile', userController.prof)

    router.get('/api/okgr', userController.okgr)
    router.post('/api/group', userController.group)
    router.post('/api/task', userController.take)
    router.post('/api/activate', userController.activate)

    router.get('/api/dmm', userController.dmm)


    router.get('/api/messa', userController.messa)
    router.get('/api/getnamegr', userController.getnamegr)

    return app.use("/", router)
}


module.exports = initWebRoutes
