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
    router.get('/api/postidk', userController.postidk)
    router.get('/api/setc', userController.setc)
    router.get('/api/role', userController.role)
    router.get('/api/getAdmin', userController.getAdmin)
    router.get('/api/getlearning', userController.getlearning)
    router.get('/api/searchRole', userController.searchRole)
    router.get('/api/Charty', userController.Charty)
    router.get('/api/userup', userController.userup)
    router.get('/api/getoff', userController.getoff)
    router.get('/api/getlearningopc', userController.getlearningopc)
    router.get('/api/getclass', userController.getclass)
    router.get('/api/toce', userController.toce)
    router.get('/api/getallfile', userController.getallfile)
    router.get('/api/allupdate', userController.allupdate)
    router.get('/api/countew', userController.countew)
    router.get('/api/getallscore', userController.getallscore)
    router.get('/api/uiui', userController.uiui)
    router.get('/api/chune', userController.chune)
    router.get('/api/jscore', userController.jscore)
    router.get('/api/qtq', userController.qtq)
    router.get('/api/searchText', userController.searchText)
    // searchText



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
    router.post('/api/createGroupl', userController.createGroupl)
    router.post('/api/rip', userController.rip)
    router.post('/api/codeclass', userController.codeclass)
    router.post('/api/filepost', userController.filepost)
    router.post('/api/filepoststudent', userController.filepoststudent)

    //allupdate
    

    //Method PUT
    router.put('/api/like', userController.like)
    router.put('/api/dislike', userController.dislike)
    router.put('/api/get-edit', userController.handlePut);
    router.put('/api/change', userController.handleChange)
    router.put('/api/get-password', userController.handlePassword);
    router.put('/api/accept', userController.acceptt);
    router.put('/api/postput', userController.postput);
    router.put('/api/sote', userController.sote);

    // sote
    // accept

   
    //Method DELETE
    router.delete('/api/getdelFusers', userController.delfusers)
    router.delete('/api/delete-users', userController.handleDelete)
    router.delete('/api/deleteAff', userController.deleteaff)
    router.delete('/api/deleteGr', userController.deleteGr)
    router.delete('/api/deleteaccount', userController.deleteaccount)
    router.delete('/api/deletepost', userController.deletepost)
    router.delete('/api/learndel', userController.learndel)
    router.delete('/api/dellpost', userController.dellpost)
    router.delete('/api/studendel', userController.studendel)
    router.delete('/api/kickoff', userController.kickoff)
    router.delete('/api/pdfdel', userController.pdfdel)


    // pdfdel

    // deleteaccount
    return app.use("/", router)
}


module.exports = initWebRoutes
