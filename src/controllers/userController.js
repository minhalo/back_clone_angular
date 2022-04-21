
import userService from "../services/userService"
const EmailValidator = require('email-deep-validator');
const multer = require('multer')




let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;



    if (!email && !password) {
        return res.status(500).json({
            errCode: 1,
            message: "Please enter your username",
            messages: "Please enter your password"
        })
    }
    else if (!email) {
        return res.status(500).json({
            errCode: 1,
            message: "Please enter your username",
            messages: null
        })
    }
    else if (!password) {
        return res.status(500).json({
            errCode: 1,
            message: null,
            messages: "Please enter your password"
        })
    }
    else {
        let userData = await userService.handleUserLogin(email, password)
        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            messages: userData.errMessages,
            user: userData.user ? userData.user : {}
        })
    }
}

let handleRegister = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let cpassword = req.body.cpassword;
    const emailValidator = new EmailValidator();
    const { wellFormed, validDomain, validMailbox } = await emailValidator.verify(email);
    if (!email) {
        return res.status(500).json({
            errCode: 1,
            messages: null,
            messagesx: null,
            message: "Please enter email",
            messagesxt: null
        })
    }
    else if (validMailbox === false) {
        return res.status(500).json({
            errCode: 1,
            messages: null,
            messagesx: null,
            message: "Your mail does not exist",
            messagesxt: null
        })
    }
    else if (password.length < 8) {
        return res.status(500).json({
            errCode: 1,
            message: null,
            messages: "Password must have more than 8 characters",
            messagesx: null,
            messagesxt: null
        })
    }
    else if (!cpassword) {
        return res.status(500).json({
            errCode: 1,
            message: null,
            messages: null,
            messagesx: "Please enter confirm password",
            messagesxt: null
        })
    }
    else {
        let userData = await userService.handleUserReg(email, password, cpassword)
        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            //email
            messages: userData.errMessages,
            //password
            messagesx: userData.errMessagesx,
            //cpassword
            messagesxt: userData.errMessagesxt
        })
    }
}

let handleGetusers = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            message: 'Missing parameter',
            users: []
        })
    }

    let userData = await userService.getUsers(id)
    return res.status(200).json({
        errCode: 0,
        message: 'ok',
        data: userData
    })
}



let handlePut = async (req, res) => {
    let id = req.body.id;
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let address = req.body.address
    let phonenumber = req.body.phonenumber
    let name = req.body.name
    let textt = req.body.textt
    let profileImg = req.body.profileImg
    let age = req.body.age
    let password = req.body.password

    if (!firstName) {
        return res.status(500).json({
            errCode: 2,
            message: "Please enter your First Name",
            messages: null,
            messagesx: null,
            messagesxz: null,
            messagesxzt: null,
            messagesxztu: null,
            messagesxztuk: null,
            messagesxztuko: null,
            messagesxztukoi: null,
            messagesxztukop: null
        })
    }
    else if (!lastName) {
        return res.status(500).json({
            errCode: 3,
            message: null,
            messages: "Please enter your Last Name",
            messagesx: null,
            messagesxz: null,
            messagesxzt: null,
            messagesxztu: null,
            messagesxztuk: null,
            messagesxztuko: null,
            messagesxztukoi: null,
            messagesxztukop: null
        })
    }
    else if (!address) {
        return res.status(500).json({
            errCode: 4,
            message: null,
            messages: null,
            messagesx: "Please enter your Address",
            messagesxz: null,
            messagesxzt: null,
            messagesxztu: null,
            messagesxztuk: null,
            messagesxztuko: null,
            messagesxztukoi: null,
            messagesxztukop: null

        })
    }
    else if (!phonenumber) {
        return res.status(500).json({
            errCode: 5,
            message: null,
            messages: null,
            messagesx: null,
            messagesxz: "Please enter your phonenumber",
            messagesxzt: null,
            messagesxztu: null,
            messagesxztuk: null,
            messagesxztuko: null,
            messagesxztukoi: null,
            messagesxztukop: null

        })
    }
    else if (!name) {
        return res.status(500).json({
            errCode: 5,
            message: null,
            messages: null,
            messagesx: null,
            messagesxz: null,
            messagesxzt: "Missing gender",
            messagesxztu: null,
            messagesxztuk: null,
            messagesxztuko: null,
            messagesxztukoi: null,
            messagesxztukop: null

        })
    }
    else if (!textt) {
        return res.status(500).json({
            errCode: 5,
            message: null,
            messages: null,
            messagesx: null,
            messagesxz: null,
            messagesxzt: null,
            messagesxztu: "Please enter your description",
            messagesxztuk: null,
            messagesxztuko: null,
            messagesxztukoi: null,
            messagesxztukop: null

        })
    }
    // "https://banner2.cleanpng.com/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg"
    else if (profileImg === null) {
        return res.status(500).json({
            errCode: 5,
            message: null,
            messages: null,
            messagesx: null,
            messagesxz: null,
            messagesxzt: null,
            messagesxztu: null,
            messagesxztuk: "Please choose your profile",
            messagesxztuko: null,
            messagesxztukoi: null,
            messagesxztukop: null

        })
    }
    else if (!age) {
        return res.status(500).json({
            errCode: 5,
            message: null,
            messages: null,
            messagesx: null,
            messagesxz: null,
            messagesxzt: null,
            messagesxztu: null,
            messagesxztuk: null,
            messagesxztuko: "Please enter your age",
            messagesxztukoi: null,
            messagesxztukop: null

        })
    }
    else if (!password) {
        return res.status(500).json({
            errCode: 5,
            message: null,
            messages: null,
            messagesx: null,
            messagesxz: null,
            messagesxzt: null,
            messagesxztu: null,
            messagesxztuk: null,
            messagesxztuko: null,
            messagesxztukoi: "Please enter your current password",
            messagesxztukop: null
        })
    }
    else {
        let userData = await userService.handleEdit(id, firstName, lastName, address, phonenumber, name, textt, profileImg, age, password)
        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            messages: userData.errMessages,
            messagesx: userData.errMessagesx,
            messagesxz: userData.errMessagesxz,
            messagesxzt: userData.errMessagesxzt,
            messagesxztu: userData.errMessagesxztu,
            messagesxztuk: userData.errMessagesxztuk,
            messagesxztuko: userData.errMessagesxztuko,
            messagesxztukoi: userData.errMessagesxztukoi,
            messagesxztukop: userData.errMessagesxztukop
        })
    }
}

let handleDelete = async (req, res) => {
    let id = req.query.id
    let pass = req.query.password
    if (!pass) {
        return res.status(500).json({
            errCode: 2,
            message: "Please enter your password",
        })

    }
    if (id) {
        let userData = await userService.handleDele(id, pass)
        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage
        })
    }
}

let handlePassword = async (req, res) => {
    let id = req.body.id
    let curpass = req.body.curpass
    let password = req.body.password
    let cpassword = req.body.cpassword

    if (!curpass) {
        return res.status(500).json({
            errCode: 1,
            message: null,
            messages: null,
            messagesx: "Please enter your current password"
        })
    }
    else if (!password) {
        return res.status(500).json({
            errCode: 1,
            message: "Please enter your new password",
            messages: null,
            messagesx: null
        })
    }
    else if (!cpassword) {
        return res.status(500).json({
            errCode: 1,
            message: null,
            messages: "Please enter your confirm password",
            messagesx: null
        })
    }
    else {
        let userData = await userService.handlePass(id, curpass, password, cpassword)
        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            messages: userData.errMessages,
            messagesx: userData.errMessagesx
            // messagesx:userData.errMessagesx
            // userData
        })
    }
}

let handleForgot = async (req, res) => {
    let email = req.body.email

    if (email) {
        let userData = await userService.handleForgot(email)
        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            id: userData.errId
        })
    }
    else {
        return res.status(200).json({
            errCode: 1,
            message: "Please enter your email",
            errId: null
        })
    }
}

let handleChange = async (req, res) => {
    let id = req.query.id
    let password = req.body.password
    let cpassword = req.body.cpassword

    if (password.length < 8) {
        return res.status(500).json({
            errCode: 2,
            message: null,
            messages: "Password length must have more than 8 character",
            messagesx: null
        })
    }
    else if (!id) {
        return res.status(500).json({
            errCode: 2,
            message: "You can't update password, please try again",
            messages: null,
            messagesx: null
        })
    }
    else if (!cpassword) {
        return res.status(500).json({
            errCode: 3,
            message: null,
            messages: null,
            messagesx: "Missing confirm password"
        })
    }
    else {
        let userData = await userService.handleChange(id, password, cpassword)
        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            messages: userData.errMessages,
            messagesx: userData.errMessagesx
        })
    }
}

let handleGetbox = async (req, res) => {
    let users = await userService.getAllUsers();
    return res.status(200).json({
        users
    })
}


let handlePost = async (req, res) => {
    let id = req.query.id
    let users = await userService.getRefresh(id)
    return res.status(200).json({
        users
    })
}

let getHeader = async (req, res) => {
    let id = req.query.id
    let userData = await userService.header(id)
    // console.log(userData)
    return res.status(200).json({
        userData
    })

}

let allusers = async (req, res) => {
    let id = req.query.id
    let userData = await userService.allaccount(id)
    return res.status(200).json({
        userData
    })
}

let role = async (req, res) => {
    let id = req.query.id
    let userData = await userService.getRole(id)
    return res.status(200).json({
        userData
    })
}

let dmm = async (req, res) => {
    let id = req.query.id
    let ids = req.query.ids
    let userData = await userService.dmmn(id, ids)
    return res.status(200).json({
        userData
    })
}

let ListActivate = async (req, res) => {
    let id = req.query.id
    // let ids = req.query.ids
    let userData = await userService.listAct(id)
    return res.status(200).json({
        userData
    })
}


let allFriend = async (req, res) => {
    let id = req.query.id
    let ids = req.query.ids
    let users = await userService.getFriends(id, ids);
    return res.status(200).json({
        users
    })
}

let fusers = async (req, res) => {
    let id = req.query.id

    let users = await userService.ffriednd(id)
    return res.status(200).json({
        users
    })
}

let bre = async (req, res) => {
    let id = req.query.id
    let ids = req.query.ids

    let users = await userService.brei(id, ids)
    return res.status(200).json({
        users
    })
}
let delfusers = async (req, res) => {
    let id = req.query.id
    let ids = req.query.ids
    let users = await userService.delffriednd(id, ids)
    return res.status(200).json({
        users
    })
}

let prof = async (req, res) => {
    let id = req.query.id
    let users = await userService.profile(id)
    return res.status(200).json({
        users
    })
}

let getReqFt = async (req, res) => {
    let id = req.query.id

    let users = await userService.reqfr(id)
    return res.status(200).json({
        users
    })
}

let kdp = async (req, res) => {
    let id = req.query.id
    let users = await userService.kdps(id)
    return res.status(200).json({
        users
    })
}

let rendom = async (req, res) => {
    let users = await userService.random()
    return res.status(200).json({
        users
    })
}

let search = async (req, res) => {
    let name = req.query.firstName
    let id = req.query.id
    let userData = await userService.fsearch(name, id)
    return res.status(200).json({
        userData
    })
}

let searchffk = async (req, res) => {
    let name = req.query.name
    let id = req.query.id
    console.log(name)
    let users = await userService.fsearchff(name, id)
    return res.status(200).json({
        users
    })
}

let fri = async (req, res) => {
    let id = req.query.id
    let userData = await userService.ffri(id)
    return res.status(200).json({
        userData
    })
}

let logout = async (req, res) => {
    let id = req.query.id
    let userData = await userService.logou(id)
    return res.status(200).json({
        userData
    })
}

let ser = async (req, res) => {
    let id = req.query.id

    let userData = await userService.fsearched(id)
    return res.status(200).json({
        userData
    })
}

let count = async (req, res) => {
    let id = req.query.id
    let userData = await userService.countt(id)
    return res.status(200).json({
        userData
    })
}

let accept = async (req, res) => {
    let id = req.query.id
    let ids = req.query.ids

    let userData = await userService.commit(id, ids)
    return res.status(200).json({
        userData
    })
}

let group = async (req, res) => {
    let id = req.query.id
    let ids = req.query.ids
    // console.log(id)
    let userData = await userService.groups(id, ids)
    return res.status(200).json({
        userData
    })
}


let okgr = async (req, res) => {
    let id = req.query.id

    let userData = await userService.okkgr(id)
    return res.status(200).json({
        userData
    })
}

let messa = async (req, res) => {
    let id = req.query.id

    let userData = await userService.mop(id)
    return res.status(200).json({
        userData
    })
}



let take = async (req, res) => {
    let id = req.query.id
    let ids = req.query.ids
    let idss = req.query.idss
    if (!ids) {
        // console.log(ids)
    }
    else {
        let userData = await userService.takeaway(id, ids, idss)
        return res.status(200).json({
            userData
        })
    }

}


let activate = async (req, res) => {
    let id = req.query.id

    let ids = req.query.ids

    let userData = await userService.activa(id, ids)
    return res.status(200).json({
        userData
    })
}

let getnamegr = async (req, res) => {
    let id = req.query.id
    let userData = await userService.nameger(id)
    return res.status(200).json({
        userData
    })
}

let createpost = async (req, res) => {
    let id = req.query.id
    let text = req.query.text
    let img = req.body.img
    // console.log(text)
    if (text === '') {

    }
    else {
        let userData = await userService.poi(id, text, img)
        return res.status(200).json({
            userData
        })
    }
}


let listpost = async (req, res) => {
    let userData = await userService.pioy()
    return res.status(200).json({
        userData
    })
}

let postidk = async (req, res) => {
    let id = req.query.id
    let userData = await userService.idkpost(id)
    return res.status(200).json({
        userData
    })
}

let like = async (req, res) => {
    let id = req.query.id

    let userData = await userService.likein(id)
    return res.status(200).json({
        userData
    })
}

let dislike = async (req, res) => {
    let id = req.query.id

    let userData = await userService.dislikein(id)
    return res.status(200).json({
        userData
    })
}

let commenti = async (req, res) => {
    let id = req.query.id
    let ids = req.query.ids
    let mes = req.query.mes
    console.log(id)
    console.log(ids)
    console.log(mes)

    if (!mes) {

    }
    else {
        let userData = await userService.commento(id, ids, mes)
        return res.status(200).json({
            userData
        })
    }

}

let comment = async (req, res) => {

    let id = req.query.id;
    let userData = await userService.listcomment(id)
    return res.status(200).json({
        userData
    })

}


let deleteaff = async (req, res) => {

    let id = req.query.id;
    let ids = req.query.ids;


    let userData = await userService.deleteafk(id, ids)
    return res.status(200).json({
        userData
    })

}


let searchingfor = async (req, res) => {
    let name = req.query.name;
    let id = req.query.id;
    let userData = await userService.searchforaff(name, id)
    return res.status(200).json({
        userData
    })
}

let deleteGr = async (req, res) => {
    let id = req.query.id;
    let userData = await userService.deleteGroup(id)
    return res.status(200).json({
        userData
    })
}


let setc = async (req, res) => {
    let id = req.query.id;
    let userData = await userService.setchange(id)
    return res.status(200).json({
        userData
    })
}


let deleteaccount = async (req, res) => {
    let id = req.query.id;
    let userData = await userService.deleteaccounts(id)
    return res.status(200).json({
        userData
    })
}

let getAdmin = async (req, res) => {
    let userData = await userService.getAllAdmin()
    return res.status(200).json({
        userData
    })
}

let acceptt = async (req, res) => {
    let id = req.query.id;
    let ids = req.query.ids;


    let userData = await userService.getAccept(id, ids)
    return res.status(200).json({
        userData
    })
}
let createGroupl = async (req, res) => {
    let id = req.query.id;
    let name = req.query.name
    let ok = req.query.ok
    
    // console.log(typeof parseInt(ok))
    if (ok > 0 && name.length > 0) {
        let userData = await userService.createGro(id, name, ok)
        return res.status(200).json({
            userData
        })
    }

}

let getlearning = async (req, res) => {
    let id = req.query.id;

    let userData = await userService.getLearn(id)
    return res.status(200).json({
        userData
    })
}

let deletepost = async (req, res) => {
    let id = req.query.id;

    let userData = await userService.postdelete(id)
    return res.status(200).json({
        userData
    })
}

let searchRole = async (req, res) => {
    let id = req.query.id;
    let ids = req.query.ids;

    let userData = await userService.rolesearch(id, ids)
    return res.status(200).json({
        userData
    })
}

let Charty = async (req, res) => {

    let userData = await userService.chartttt()
    return res.status(200).json({
        userData
    })
}

let userup = async (req, res) => {

    let userData = await userService.upuser()
    return res.status(200).json({
        userData
    })
}

let learndel = async (req, res) => {
    let id = req.query.id
    let userData = await userService.dellearn(id)
    return res.status(200).json({
        userData
    })
}

let rip = async (req, res) => {
    let id = req.query.id
    let ids = req.query.ids
    let idss = req.query.idss
   
    
    let userData = await userService.pir(id,ids,idss)
    return res.status(200).json({
        userData
    })
}

let getlearningopc =  async (req, res) => {
    let id = req.query.id
    let userData = await userService.opc(id)
    return res.status(200).json({
        userData
    })
}


let getoff =  async (req, res) => {
    let id = req.query.id
    let userData = await userService.offget(id)
    return res.status(200).json({
        userData
    })
}

let dellpost =  async (req, res) => {
    let id = req.query.id
    let ids = req.query.ids
    let userData = await userService.lpostdel(id,ids)
    return res.status(200).json({
        userData
    })
}

let codeclass = async (req, res) => {
    let id = req.query.id
    let ids = req.query.ids
    let userData = await userService.classcode(id,ids)
    return res.status(200).json({
        userData
    })
}


let getclass =  async (req, res) => {
    let id = req.query.id
    // console.log(id)
   
    let userData = await userService.classget(id)
    return res.status(200).json({
        userData
    })
}

let studendel = async (req, res) => {
    let id = req.query.id
    let ids = req.query.ids
    // console.log(id)
   
    let userData = await userService.delstuden(id,ids)
    return res.status(200).json({
        userData
    })
}

let toce = async (req, res) => {
    let id = req.query.id
   
  
   
    let userData = await userService.ceot(id)
    return res.status(200).json({
        userData
    })
}

let kickoff = async (req, res) => {
    let id = req.query.id
    let ids = req.query.ids
    let userData = await userService.offkick(id,ids)
    return res.status(200).json({
        userData
    })
}

module.exports = {
    kickoff:kickoff,
    studendel:studendel,
    toce:toce,
    getclass:getclass,
    codeclass:codeclass,

    dellpost:dellpost,
    getoff:getoff,
    getlearningopc:getlearningopc,
    rip:rip,
    learndel: learndel,
    userup: userup,
    Charty: Charty,
    searchRole: searchRole,
    deletepost: deletepost,
    getlearning: getlearning,
    createGroupl: createGroupl,
    acceptt: acceptt,
    getAdmin: getAdmin,
    deleteaccount: deleteaccount,
    setc: setc,
    postidk: postidk,
    deleteGr: deleteGr,
    searchingfor: searchingfor,
    deleteaff: deleteaff,
    searchffk: searchffk,
    comment: comment,
    commenti: commenti,
    dislike: dislike,
    like: like,
    listpost: listpost,
    createpost: createpost,
    ListActivate: ListActivate,
    getnamegr: getnamegr,
    messa: messa,
    dmm: dmm,
    activate: activate,
    take: take,
    okgr: okgr,
    group: group,
    prof: prof,
    kdp: kdp,
    accept: accept,
    count: count,
    rendom: rendom,
    getReqFt: getReqFt,
    search: search,
    handleLogin: handleLogin,
    delfusers: delfusers,
    ser: ser,
    handleRegister: handleRegister,
    handleGetusers: handleGetusers,
    handlePut: handlePut,
    handleDelete: handleDelete,
    handlePassword: handlePassword,
    handleForgot: handleForgot,
    handleChange: handleChange,
    handleGetbox: handleGetbox,
    handlePost: handlePost,
    getHeader: getHeader,
    allusers: allusers,
    allFriend: allFriend,
    fusers: fusers,
    fri: fri,
    logout: logout,
    bre: bre,
    role: role
}