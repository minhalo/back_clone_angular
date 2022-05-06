import db from "../models/index"
import bcrypt from 'bcryptjs'
const nodemailer = require("nodemailer");
// import sequelize from "../config/connectDB"
const { Sequelize, and } = require('sequelize');
const Op = Sequelize.Op;

import { Server, Socket } from 'socket.io'


export const io = new Server(7000, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"]
    }

})

io.on("connection", (socket) => {
    // console.log(socket.id)
    socket.on("disconnect", () => {
        // console.log("User Disconected", socket.id)
    })
    socket.on("sen_message", (data) => {
        // console.log(data)
        let user = db.Group.create({
            groupname: data.room
        })
        socket.to(data.idFriend).emit("recivedata", data)
    })
})


let groups = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            // let userData = {};
            let uiko = await db.Group.findOne({
                where: {
                    groupname: id,
                    idAccount: ids
                },
                raw: true
            })

            if (!uiko) {
                if(id)
                {

                
                let user = await db.Group.create({
                    groupname: id,
                    idaccount: ids
                })

                let users = await db.Group.findOne({
                    where: {
                        groupname: id,
                        idAccount: ids
                    },
                    raw: true
                })
                // console.log(users.id)
                let doto = users.id
                let aka = users.idaccount

                let data = await db.Subgroup.findOne({
                    where: {
                        groupId: doto,
                        accountId: aka
                    },
                    raw: true
                })
                if (!data) {
                    let user = db.Subgroup.create({
                        groupId: doto,
                        accountId: aka
                    })
                }

                resolve(1)
                }
                else{
                    let meserro = "Invalid Groupname"
                    resolve(meserro)
                }
            }
            else {
                let meserro = "Try another group name"
                resolve(meserro)
            }

        } catch (error) {
            reject(error)
        }
    })
}




let okkgr = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // let userData = {};

            // let usi = 1
            let [test] = await sequelize.query(`
            SELECT groupId, groups.groupname, groups.id, accountId from groups, subgroups WHERE groupId = groups.id and accountId = ${id}
            `);
            resolve(test)

        } catch (error) {
            reject(error)
        }
    })
}
let nameger = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.Group.findOne({
                where: {
                    id: id,
                },
                raw: true
            })
            resolve(users)

        } catch (error) {
            reject(error)
        }
    })
}


let mop = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // let userData = {};

            // let usi = 1
            let [test] = await sequelize.query(`
            SELECT users.id,firstName, chats.createdAt, image, groupchatId, message from users, chats WHERE chats.accountchatId = users.id and groupchatId = ${id} ORDER by chats.id;
            `);
            resolve(test)

        } catch (error) {
            reject(error)
        }
    })
}


let takeaway = (id, ids, idss) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(id)
            // console.log(ids)
            // console.log(idss)
            let ok = 1
            // console.log(idss)
            let users = await db.Subgroup.findOne({
                where: {
                    groupId: ids,
                    accountId: id
                },
                // attributes: ['id', 'email', 'password', 'firstName', 'address', 'lastName', 'status', 'phonenumber'],
                raw: true
            })
            if (users && idss) {
                let user = db.Chat.create({
                    accountchatId: id,
                    groupchatId: ids,
                    message: idss
                })
            }

            resolve(ok)

        } catch (error) {
            reject(error)
        }
    })
}

let activa = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ok = 1
            if (ids && ids != 0) {
                let users = await db.Subgroup.findOne({
                    where: {
                        groupId: id,
                        accountId: ids
                    },
                    // attributes: ['id', 'email', 'password', 'firstName', 'address', 'lastName', 'status', 'phonenumber'],
                    raw: true
                })
                if (!users) {
                    let user = db.Subgroup.create({
                        groupId: id,
                        accountId: ids,
                    })
                }
            }

            resolve(ok)

        } catch (error) {
            reject(error)
        }
    })
}


let dmmn = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {

            let [test] = await sequelize.query(`
            SELECT lastName, users.id, firstName, image from users, subgroups where groupId = ${id} and subgroups.accountId = users.id and users.id != ${ids};
            `);

            resolve(test)

        } catch (error) {
            reject(error)
        }
    })
}
let listAct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {

            if (id != 0) {
                let [test] = await sequelize.query(`
                SELECT lastName, groups.idaccount , groups.groupname, groups.id, firstName from users, groups where groups.idaccount = users.id and groups.idaccount = ${id};
                `);
                resolve(test)
            }

            else {
                resolve(true)
            }

        } catch (error) {
            reject(error)
        }
    })
}


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('coursework', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
let handleUserReg = (email, password, cpassword) => {
    return new Promise(async (resolve, reject) => {
        try {

            let checkEmail = await validate(email)
            let userData = {}
            let number = 0
            let up = 0;
            let down = 0;
            let spec = 0;
            for (let i = 0; i <= password.length; i++) {
                let character = password.charAt(i);
                if (!isNaN(character * 1)) {
                    number++
                } else {
                    if (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) {
                        up++
                    }
                    if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
                        down++
                    }
                    if (character.charCodeAt(0) < 48 || character.charCodeAt(0) > 57 && character.charCodeAt(0) < 65 || character.charCodeAt(0) > 90 && character.charCodeAt(0) < 97 || character.charCodeAt(0) > 122) {
                        spec++;
                    }
                }


            }
            if (checkEmail === true) {
                if (up > 0 && down > 0 && spec > 0) {
                    if (cpassword === password) {
                        let isExist = await checkUserEmail(email)
                        if (isExist) {
                            userData.errCode = 2;
                            userData.errMessage = "This email is created",
                                userData.errMessages = null,
                                userData.errMessagesx = null
                            userData.errMessagesxt = null
                        }

                        else {
                            const hash = bcrypt.hashSync(password, 12);
                            let ranNum = Math.random().toString()
                            const hashids = bcrypt.hashSync(ranNum, 12)

                            const idstx = hashids.replaceAll(["/"], ".")


                            let user = await db.User.create({
                                email: email,
                                password: hash,
                                firstName: "New",
                                lastName: "User",
                                address: null,
                                phonenumber: null,
                                ids: idstx,
                                image: "https://banner2.cleanpng.com/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg",
                                gender: null,
                                age: null,
                                status: 0,
                                roleid: 2
                            })

                            userData.errCode = 0;
                            userData.errMessage = null,
                                userData.errMessages = null,
                                userData.errMessagesx = "Create account successfully",
                                userData.errMessagesxt = null
                        }
                    }

                    else {
                        userData.errCode = 4;
                        userData.errMessage = null,
                            userData.errMessages = null,
                            userData.errMessagesx = "Confirm password is wrong",
                            userData.errMessagesxt = null
                    }
                } else {
                    userData.errCode = 6;
                    userData.errMessage = null,
                        userData.errMessages = null,
                        userData.errMessagesx = null,
                        userData.errMessagesxt = "Please at least 1 uppercase, 1 lowercase and 1 specialcase"
                }
            } else {
                userData.errCode = 5;
                userData.errMessage = "Your email is wrong, include @.",
                    userData.errMessages = null,
                    userData.errMessagesx = null,
                    userData.errMessagesxt = null
            }
            resolve(userData)
        } catch (error) {
            reject(error)
        }
    })
}

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email)
            if (isExist) {
                let user = await db.User.findOne({
                    where: { email: email },
                    attributes: ['id', 'email', 'roleid', 'password', 'firstName', 'address', 'lastName', 'status', 'phonenumber'],
                    raw: true
                })
                if (user) {
                    let check = bcrypt.compareSync(password, user.password)
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = "Right username";
                        userData.errMessages = "Right password"
                        delete user.password;
                        userData.user = user;
                        await sequelize.query(`
                        UPDATE users
                        SET status = 1
                        WHERE email = '${email}';
                        `);
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessages = "Wrong password! Please try again";
                        userData.errMessage = null
                    }
                }
                else {
                    userData.errCode = 2;
                    userData.errMessage = "Can't login in!!! Please try again"
                    userData.errMessages = "Can't login in!!! error status (500)"

                }

            }
            else {
                userData.errCode = 1;
                userData.errMessage = "Please enter your email correctly"
                userData.errMessages = null
            }
            resolve(userData)
        } catch (error) {
            reject(error)
        }
    })
}


let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        } catch (error) {
            reject(error)
        }
    })
}

let getUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            // let userData = {};
            let users = ''
            users = await db.User.findOne({
                where: { id: userId },
                attributes: {
                    exclude: ['password']
                }
            })
            resolve(users)

        } catch (error) {
            reject(error)
        }
    })
}

let handleEdit = (id, firstName, lastName, address, phonenumber, name, textt, profileImg, age, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let user = await db.User.findOne({
                where: { id: id },
                raw: false,
            })
            let bhash = bcrypt.compareSync(password, user.password);
            if (bhash === true) {
                if (user) {
                    user.firstName = firstName
                    user.image = profileImg
                    user.lastName = lastName
                    user.address = address
                    user.phonenumber = phonenumber,
                        user.gender = name,
                        user.description = textt,
                        user.profileImg = profileImg
                    user.age = age
                    await user.save();
                    userData.errCode = 0,
                        userData.errMessage = null,
                        userData.errMessages = null,
                        userData.errMessagesx = null,
                        userData.errMessagesxz = null,
                        userData.errMessagesxzt = null,
                        userData.errMessagesxztu = null,
                        userData.errMessagesxztuk = null,
                        userData.errMessagesxztuko = null,
                        userData.errMessagesxztukoi = null,
                        userData.errMessagesxztukop = "Change profile successfully"
                } else {
                    userData.errCode = 1,
                        userData.errMessage = null,
                        userData.errMessages = null,
                        userData.errMessagesx = null,
                        userData.errMessagesxz = null,
                        userData.errMessagesxzt = null,
                        userData.errMessagesxztu = null,
                        userData.errMessagesxztuk = null,
                        userData.errMessagesxztuko = null,
                        userData.errMessagesxztukoi = null,
                        userData.errMessagesxztukop = "Change profile is not successfully"
                }
            }
            else {
                userData.errCode = 1,
                    userData.errMessage = null,
                    userData.errMessages = null,
                    userData.errMessagesx = null,
                    userData.errMessagesxz = null,
                    userData.errMessagesxzt = null,
                    userData.errMessagesxztu = null,
                    userData.errMessagesxztuk = null,
                    userData.errMessagesxztuko = null,
                    userData.errMessagesxztukoi = null,
                    userData.errMessagesxztukop = "Password is not correct"
            }
            resolve(userData)
        } catch (error) {
            reject(error)
        }
    })
}

let logou = (id) => {
    return new Promise(async (resolve, reject) => {
        try {

            let userData = {}
            let user = await db.User.findOne({
                where: { id: id },
                raw: false,
            })
            if (user) {
                await sequelize.query(`
                UPDATE users
                SET status = 0
                WHERE id = '${id}';
                `);
                userData.mes = "change successfully"
            }
            resolve(userData)
        } catch (error) {
            reject(error)
        }
    })
}


let handlePass = (id, curpass, password, cpassword) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let user = await db.User.findOne({
                where: { id: id },
                raw: false,
            })
            let number = 0
            let up = 0;
            let down = 0;
            let spec = 0;
            for (let i = 0; i <= password.length; i++) {
                let character = password.charAt(i);
                if (!isNaN(character * 1)) {
                    number++
                } else {
                    if (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) {
                        up++
                    }
                    if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
                        down++
                    }
                    if (character.charCodeAt(0) < 48 || character.charCodeAt(0) > 57 && character.charCodeAt(0) < 65 || character.charCodeAt(0) > 90 && character.charCodeAt(0) < 97 || character.charCodeAt(0) > 122) {
                        spec++;
                    }
                }


            }
            if (up > 0 && down > 0 && spec > 0) {
                if (cpassword === password) {
                    if (user) {
                        let bro = bcrypt.compareSync(curpass, user.password);

                        if (bro === true) {
                            const hash = bcrypt.hashSync(password, 12);
                            user.password = hash
                            await user.save();

                            userData.errCode = 0;
                            userData.errMessage = null,
                                userData.errMessages = null
                            userData.errMessagesx = "Change pass is successfully"
                        }
                        else {
                            userData.errCode = 1;
                            userData.errMessage = null,
                                userData.errMessages = null,
                                userData.errMessagesx = "Current password is wrongt !!"
                        }
                    } else {
                        userData.errCode = 1;
                        userData.errMessage = "Don't have any user",
                            userData.errMessages = null,
                            userData.errMessagesx = null
                    }
                }
                else {
                    userData.errCode = 1;
                    userData.errMessage = "Confirm password is wrong!!!",
                        userData.errMessages = null,
                        userData.errMessagesx = null
                }
            }
            else {
                userData.errCode = 1;
                userData.errMessage = "Password must have at least 1 uppercase, 1 specialcase, 1 lowercase",
                    userData.errMessages = null,
                    userData.errMessagesx = null
            }
            resolve(userData)

        } catch (error) {
            reject(error)
        }
    })
}


let handleDele = (id, pass) => {
    return new Promise(async (resolve, reject) => {
        try {
            const row = await db.User.findOne({
                where: { id: id },
            });

            let hit = bcrypt.compareSync(pass, row.password)
            let userData = {}
            if (row) {
                if (hit === true) {
                    await db.User.destroy({
                        where: { id: id },
                    });
                    userData.errCode = 0;
                    userData.errMessage = null
                }
                else {
                    userData.errCode = 1;
                    userData.errMessage = "Password is wrong"
                }

            }
            else {
                userData.errCode = 1;
                userData.errMessage = "No user"
            }
            resolve(userData)
        } catch (error) {
            reject(error)
        }
    })
}

let validate = (email) => {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
        return false
    }
    else {
        return true
    }
}

let handleForgot = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let exist = await checkUserEmail(email)

            if (exist === true) {
                let data = await getUsersByEmail(email)
                const id = data.ids
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'duongdoican@gmail.com',
                        pass: 'minlvip123'
                    }
                });
                var mailOptions = {
                    from: 'duongdoican@gmail.com',
                    to: email,
                    subject: 'Verify email, DUDE team',
                    // text: `Thank ${data.firstName} ${data.lastName} for join with us`,
                    html: `Thank ${data.firstName} ${data.lastName} for join with us. <br/> Click <a href=http://localhost:3000/forgot/${id}>here</a> to change your password`
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                resolve({
                    errCode: 2,
                    errMessage: 'User send success',
                    errId: id
                })
            }

            else {
                resolve({
                    errCode: 3,
                    errMessage: 'User send fail, your email does not exist',
                    errId: null
                })

            }
        } catch (error) {
            reject(error)
        }
    })
}

let getUsersByEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            // let userData = {};
            let users = ''
            users = await db.User.findOne({
                where: { email: email },
                // attributes: {
                //     exclude: ['password']
                // }
            })
            resolve(users)

        } catch (error) {
            reject(error)
        }
    })
}

let handleChange = (id, password, cpassword) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let number = 0
            let up = 0;
            let down = 0;
            let spec = 0;
            for (let i = 0; i <= password.length; i++) {
                let character = password.charAt(i);
                if (!isNaN(character * 1)) {
                    number++
                } else {
                    if (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) {
                        up++
                    }
                    if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
                        down++
                    }
                    if (character.charCodeAt(0) < 48 || character.charCodeAt(0) > 57 && character.charCodeAt(0) < 65 || character.charCodeAt(0) > 90 && character.charCodeAt(0) < 97 || character.charCodeAt(0) > 122) {
                        spec++;
                    }
                }


            }


            if (cpassword !== password) {
                userData.errCode = 2;
                userData.errMessage = null,
                    userData.errMessages = null,
                    userData.errMessagesx = "Password and confirm password is not match !!!"
            }
            else {

                let user = await db.User.findOne({
                    where: { ids: id },
                    raw: false,
                })
                if (user) {

                    if (up > 0 && down > 0 && spec > 0) {
                        const hash = bcrypt.hashSync(password, 12);
                        let ranNum = Math.random().toString()
                        const hashids = bcrypt.hashSync(ranNum, 12)


                        const idstx = hashids.replaceAll(["/"], ".")
                        user.password = hash
                        user.ids = idstx
                        await user.save();
                        userData.errCode = 0,
                            userData.errMessage = null,
                            userData.errMessages = null,
                            userData.errMessagesx = null
                    } else {
                        userData.errCode = 7,
                            userData.errMessage = null,
                            userData.errMessages = "Please at least 1 uppercase, 1 lowercase and 1 specialcase",
                            userData.errMessagesx = null

                    }

                } else {
                    userData.errCode = 5,
                        userData.errMessage = null,
                        userData.errMessages = "Don't have any user to changes",
                        userData.errMessagesx = null
                }

            }

            resolve(userData)
        } catch (error) {
            reject(error)
        }
    })
}

let getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = []
            users = await db.Box.findAll()
            resolve(users)
        } catch (error) {
            reject(error)
        }
    })
}

let getRefresh = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let tryn = false
            // const hash = bcrypt.hashSync(id, 12);
            let user = await db.User.findOne({
                where: { ids: id },
                raw: false,
            })
            if (user) {
                const hash = bcrypt.hashSync(id, 12);
                const idstx = hash.replaceAll(["/"], ".")
                user.ids = idstx
                setTimeout(async function () {
                    await user.save();
                }, 300000);
                // 300000
                setTimeout(async function () {
                    tryn = true
                }, 300000);
                resolve(tryn)
            }
            else {
                tryn = true
                resolve(tryn)
            }
        } catch (error) {
            reject(error)
        }
    })
}

let header = (id) => {
    return new Promise(async (resolve, reject) => {
        try {

            let user = await db.User.findOne({
                where: { id: id },
                raw: false,
                attributes: {
                    exclude: ['password', 'email', 'address', 'phonenumber', 'description', 'ids', 'age', 'gender']
                }
            })
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}

let getRole = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let [test] = await sequelize.query(`
            SELECT users.id, users.firstName, users.lastName, roles.name
            FROM users, roles
            WHERE roles.id = users.roleid and users.id != ${id}
            `);
            resolve(test)
        } catch (error) {
            reject(error)
        }
    })
}

let allaccount = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findAll({
                attributes: {
                    exclude: ['password', 'ids']
                },
                where: {
                    id: { [Op.notIn]: [id] }
                },
            })
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}

let getFriends = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = true
            let usercheck = await db.Addfr.findOne({
                where: { idFriend: ids, idAccount: id },
                raw: true
            })
            let userchecks = await db.Add.findOne({
                where: { idFriend: ids, idAccount: id },
                raw: true
            })
            if (!usercheck && !userchecks) {
                let user = await db.Add.create({
                    idAccount: id,
                    idFriend: ids
                })
                userData = false
            }
            resolve(userData)

        } catch (error) {
            reject(error)
        }
    })
}

let ffriednd = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let [test] = await sequelize.query(`
            SELECT users.id, users.status, users.lastName, users.firstName, users.description, users.image
            FROM users, addfrs
            WHERE users.id = addfrs.idFriend and addfrs.idAccount = ${id};
            `);
            resolve(test)
        } catch (error) {
            reject(error)
        }
    })
}

let countt = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let testl = await db.Add.count({
                where: { idFriend: id },
            });
            resolve(testl)
        } catch (error) {
            reject(error)
        }
    })
}

let commit = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            let testl = true
            if (id && ids) {
                let usercheck = await db.Addfr.findOne({
                    where: { idFriend: ids, idAccount: id },
                    raw: true
                })
                if (!usercheck) {
                    let user = await db.Addfr.create({
                        idAccount: id,
                        idFriend: ids
                    })
                    await db.Add.destroy({
                        where: {
                            idAccount: ids,
                            idFriend: id
                        },
                    });
                }
                let userchecks = await db.Addfr.findOne({
                    where: { idFriend: id, idAccount: ids },
                    raw: true
                })
                if (!userchecks) {
                    let users = await db.Addfr.create({
                        idAccount: ids,
                        idFriend: id
                    })
                    await db.Add.destroy({
                        where: {
                            idAccount: id,
                            idFriend: ids
                        },
                    });
                }




            }
            resolve(testl)
        } catch (error) {
            reject(error)
        }
    })
}

let reqfr = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let [test] = await sequelize.query(`
            SELECT users.id, users.lastName, users.firstName, users.description, users.image FROM users, adds WHERE users.id = adds.idAccount and adds.idFriend = ${id}`);
            resolve(test)
        } catch (error) {
            reject(error)
        }
    })
}
let kdps = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let [test] = await sequelize.query(`
            SELECT users.id, users.age, users.lastName, users.firstName, users.description, users.image 
            FROM users, addfrs
            WHERE users.id = addfrs.idFriend and addfrs.idAccount = ${id}`);
            resolve(test)
        } catch (error) {
            reject(error)
        }
    })
}

let brei = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            let usercheck = await db.Add.findOne({
                where: { idFriend: ids, idAccount: id },
                raw: true
            })

            if (usercheck) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        } catch (error) {
            reject(error)
        }
    })
}

let delffriednd = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ok = false
            const check = await db.Addfr.findOne({
                where: { idAccount: id, idFriend: ids },
            });
            if (check) {
                await db.Addfr.destroy({
                    where: { idAccount: id, idFriend: ids },
                });
                await db.Addfr.destroy({
                    where: { idAccount: ids, idFriend: id },
                });
            }
            resolve(ok)
        } catch (error) {
            reject(error)
        }
    })
}

let fsearch = (name, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = []
            if (name) {
                let check = await db.User.findAll({
                    where: {
                        firstName: { [Op.like]: `%${name}%` },
                        id: { [Op.notIn]: [id] }
                    },
                    attributes: {
                        exclude: ['password', 'ids']
                    }
                });
                resolve(check)
            }
            else {
                let check = await db.User.findAll({
                    where: {
                        id: { [Op.notIn]: [id] }
                    },
                    attributes: {
                        exclude: ['password', 'ids']
                    }
                })
                userData.push(check)
                resolve(check)
            }
            // resolve(userData)
        } catch (error) {
            reject(error)
        }
    })
}


let fsearchff = (name, id) => {
    return new Promise(async (resolve, reject) => {
        try {

            let [test] = await sequelize.query(`
            SELECT users.firstName, users.age, users.image, users.description FROM users, addfrs WHERE users.id = addfrs.idFriend AND addfrs.idAccount = ${id} AND users.firstName LIKE '%${name}%'`);
            resolve(test)

        } catch (error) {
            reject(error)
        }
    })
}


let fsearched = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // let userData = []
            if (id) {
                let check = await db.User.findAll({
                    where: {
                        id: { [Op.notIn]: [id] }
                    },
                    attributes: {
                        exclude: ['password', 'ids']
                    }
                });
                resolve(check)
            }
            else {
                // let check = await db.User.findAll({
                //     where: {
                //         id: { [Op.notIn]: [id] }
                //     },
                //     attributes: {
                //         exclude: ['password', 'ids']
                //     }
                // })
                // userData.push(check)
                // resolve(check)
            }
            // resolve(userData)
        } catch (error) {
            reject(error)
        }
    })
}


let random = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let [test] = await sequelize.query(`
            SELECT 
            *
            FROM users
            ORDER BY RAND()
            LIMIT 10;`);
            resolve(test)
        } catch (error) {
            reject(error)
        }
    })
}

let profile = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: id },
                raw: false,
                attributes: {
                    exclude: ['password', 'id', 'email']
                }
            })
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}

let poi = (id, text, img) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(img)
            // console.log(text)
            // console.log(img)
            let user = db.Post.create({
                accId: id,
                text: text,
                image: img,
                like: 0,
                dislike: 0
            })

            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}


let pioy = () => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(text)
            let [test] = await sequelize.query(`
            SELECT users.firstName, users.id as pop, roles.name, posts.image as op, posts.id,posts.createdAt, posts.like, posts.dislike, users.image, posts.text from users,roles, posts WHERE posts.accId = users.id and roles.id = users.roleid ORDER BY Posts.id DESC;
            `);
            // let test = true

            resolve(test)
        } catch (error) {
            reject(error)
        }
    })
}

let likein = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(text)
            let user = await db.Post.findOne({
                where: { id: id },
                raw: false,
            })
            if (user) {
                user.like = user.like + 1
                await user.save();
            }

            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}
let dislikein = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(text)
            let user = await db.Post.findOne({
                where: { id: id },
                raw: false,
            })
            if (user) {
                user.dislike = user.dislike + 1
                await user.save();
            }

            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}

let commento = (id, idk, mes) => {
    return new Promise(async (resolve, reject) => {
        try {

            let user = db.Comment.create({
                arcId: id,
                potId: idk,
                content: mes,
            })


            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}

let listcomment = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(id)
            if (id) {
                let [test] = await sequelize.query(`
                SELECT users.firstName, comments.createdAt, users.image, comments.content from users, comments WHERE users.id = comments.arcId and potId = ${id} group by comments.id DESC
                `);
                resolve(test)
            }
            // ORDER BY Posts.id DESC
            // console.log(id)
            // let user = await db.Comment.findAll({
            //     attributes: {
            //         exclude: ['password', 'ids']
            //     },
            //     where: {
            //         // id: { [Op.notIn]: [id] }
            //         potId: id
            //     },
            // })
            else {
                let [test] = await sequelize.query(`
                SELECT users.firstName, comments.createdAt, users.image, comments.content from users, comments WHERE users.id = comments.arcId 
                `);
                resolve(test)
            }


        } catch (error) {
            reject(error)
        }
    })
}

let deleteafk = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {


            let data = await db.Add.findOne({
                where: { idAccount: ids, idFriend: id },
            });
            // console.log(data)
            if (data) {
                // console.log(id,ids)
                await db.Add.destroy({
                    where: {
                        idAccount: ids,
                        idFriend: id
                    },
                });
            }


            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}


let searchforaff = (name, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let [test] = await sequelize.query(`SELECT users.firstName, users.image, users.description From users, adds WHERE users.id = adds.idAccount AND adds.idFriend = ${id} AND users.firstName LIKE '%${name}%'`);
            resolve(test)
        } catch (error) {
            reject(error)
        }
    })
}

let deleteGroup = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                await db.Group.destroy({
                    where: { id: id },
                });
            }
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}

let idkpost = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let users = await db.Post.findOne({
                    where: {
                        id: id,
                    },
                    raw: true
                })

                resolve(users)
            }

        } catch (error) {
            reject(error)
        }
    })
}


let setchange = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let [test] = await sequelize.query(`
                SELECT users.firstName, posts.image as op, posts.id,posts.createdAt, posts.like, posts.dislike, users.image, posts.text from users, posts WHERE posts.accId = users.id and posts.accId = ${id} ORDER BY Posts.id DESC;
                `);

                resolve(test)
            }

        } catch (error) {
            reject(error)
        }
    })
}

let deleteaccounts = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                const row = await db.User.findOne({
                    where: { id: id },
                });

                if (row) {

                    await db.User.destroy({
                        where: { id: id },
                    });


                }

            }
            resolve(true)

        } catch (error) {
            reject(error)
        }
    })
}

let getAllAdmin = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.Role.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            resolve(users)

        } catch (error) {
            reject(error)
        }
    })
}

let getAccept = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {

            let user = await db.User.findOne({
                where: {
                    id: id,
                },
                raw: true
            })
            if (user) {

                // UPDATE users SET roleid = ${ids} where users.id = ${id}
                let [test] = await sequelize.query(`
                UPDATE users SET roleid = ${ids} where users.id = ${id}
                `);
            }

            resolve(true)

        } catch (error) {
            reject(error)
        }
    })
}

let createGro = (id, name, ok) => {
    return new Promise(async (resolve, reject) => {
        try {
            //         groupname: DataTypes.STRING,
            // idaccount: DataTypes.INTEGER

            let user = db.Learning.create({
                groupname: name,
                idaccount: id,
                point: ok
            })


            resolve(true)

        } catch (error) {
            reject(error)
        }
    })
}

let getLearn = (id) => {
    return new Promise(async (resolve, reject) => {
        try {

            let users = await db.Learning.findAll({
                where: {
                    idaccount: id
                },
            })


            resolve(users)

        } catch (error) {
            reject(error)
        }
    })
}

let postdelete = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(id)
            const row = await db.Post.findOne({
                where: { id: id },
            });
            await db.Post.destroy({
                where: { id: id },
            });



            resolve(false)


        } catch (error) {
            reject(error)
        }
    })
}

let rolesearch = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            let [test] = await sequelize.query(`
            SELECT users.firstName, users.lastName, users.id, roles.name from users, roles WHERE roles.id = users.roleid and users.id != ${ids} and users.firstName like '%${id}%'
            `);

            resolve(test)

        } catch (error) {
            reject(error)
        }
    })
}

let chartttt = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let [test] = await sequelize.query(`
            SELECT users.firstName, COUNT( posts.text) as pop from users, posts WHERE posts.accId = users.id GROUP BY users.firstName order by pop desc LIMIT 10
            `);

            resolve(test)

        } catch (error) {
            reject(error)
        }
    })
}
let upuser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let [currentYear] = await sequelize.query(`
            SELECT count(users.firstName) as pop from users where year(users.createdAt) = Year(NOW())
            `);
            let [lastYear] = await sequelize.query(`
            SELECT count(users.firstName) as pop from users where year(users.createdAt) = Year(NOW()) -1
            `);
            let [post] = await sequelize.query(`
            SELECT count(posts.id) as pop from posts where year(posts.createdAt) = Year(NOW())
            `);
            let [lastpost] = await sequelize.query(`
            SELECT count(posts.id) as pop from posts where year(posts.createdAt) = Year(NOW())-1
            `);

            let [comment] = await sequelize.query(`
            SELECT count(comments.id) as pop from comments where year(comments.createdAt) = Year(NOW())
            `);
            let [lastcomment] = await sequelize.query(`
            SELECT count(comments.id) as pop from comments where year(comments.createdAt) = Year(NOW())-1
            `);

            let user = []

            user.push(currentYear)
            user.push(lastYear)
            user.push(post)
            user.push(lastpost)
            user.push(comment)
            user.push(lastcomment)

            resolve(user)

        } catch (error) {
            reject(error)
        }
    })
}

let dellearn = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let [test] = await sequelize.query(`
            DELETE FROM learnings WHERE learnings.id = ${id};
            `);

            resolve(test)

        } catch (error) {
            reject(error)
        }
    })
}

let pir = (id, ids, idss) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = db.Lpost.create({
                accId: id,
                learningId: ids,
                text: idss
            })
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}

let opc = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let [test] = await sequelize.query(`
            SELECT users.id as pop, lposts.id, lposts.text from lposts,users where lposts.learningId = ${id} AND lposts.accId = users.id ORDER BY lposts.id DESC;

            `);
            resolve(test)
        } catch (error) {
            reject(error)
        }
    })
}

let offget = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let [test] = await sequelize.query(`
            SELECT users.firstName from learnings,users where users.id = learnings.idaccount and learnings.id = ${id}

            `);
            resolve(test)
        } catch (error) {
            reject(error)
        }
    })
}


let lpostdel = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            let [test] = await sequelize.query(`
            DELETE FROM lposts WHERE lposts.learningId = ${ids} and lposts.id = ${id};
            `);

            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}

let classcode = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.Learning.findOne({
                where: {
                    id: ids,
                },
                raw: true
            })


            if (users) {

                let user = db.Sublearn.create({
                    accId: id,
                    learningId: ids,
                })


            }
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}


let classget = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(id)
            let [test] = await sequelize.query(`
            Select  learnings.id,learnings.groupname, learnings.point from learnings, sublearns, users where  sublearns.accId = users.id AND sublearns.learningId = learnings.id and users.id = ${id}
            `);

            resolve(test)
        } catch (error) {
            reject(error)
        }
    })
}


let delstuden = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(id)
            // console.log(ids)
            let [test] = await sequelize.query(`
            DELETE FROM sublearns WHERE sublearns.accId = ${ids} and sublearns.learningId = ${id};
            `);

            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}


let ceot = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(id)
            // console.log(ids)
            let [test] = await sequelize.query(`
            SELECT users.id,users.firstName, users.image from users, sublearns WHERE users.id = sublearns.accId and sublearns.learningId = ${id}
            `);

            resolve(test)
        } catch (error) {
            reject(error)
        }
    })
}

let offkick = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {

            let [test] = await sequelize.query(`
            DELETE FROM sublearns WHERE sublearns.accId = ${id} and sublearns.learningId = ${ids}
            `);

            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}


let putpost = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            let [test] = await sequelize.query(`
            UPDATE lposts SET lposts.text = '${ids}' WHERE lposts.id = ${id}
            `);

            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}

let postfile = (id, ids, idss) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(idss)
            let user = db.File.create({
                lpostId: id,
                file: ids,
                fileName: idss
            })
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}


let fileallget = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.File.findAll({
                where: {
                    lpostId: id
                },
            })
            resolve(users)
        } catch (error) {
            reject(error)
        }
    })
}

let delpdf = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let [test] = await sequelize.query(`
            DELETE FROM files WHERE files.id = ${id}
            `);
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}


let studenfile = (idt, id, ids, idss, iei) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(idss)
            let user = db.Studentf.create({
                lpostId: id,
                file: ids,
                fileName: idss,
                acc: idt,
                point: 0,
                chosan: iei
            })
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}

let updateall = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.Studentf.findAll({
                where: {
                    acc: id,
                    lpostId: ids
                },
            })
            resolve(users)
        } catch (error) {
            reject(error)
        }
    })
}


let wcount = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            let [test] = await sequelize.query(`
            SELECT SUM(studentfs.point) as pop 
            FROM  studentfs    
            WHERE studentfs.lpostId = ${ids} and studentfs.acc = ${id};  
            `);

            resolve(test)
        } catch (error) {
            reject(error)
        }
    })
}

let scoregetall = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(id)
            let [test] = await sequelize.query(`
            SELECT users.id as userid,studentfs.id, users.firstName, users.lastName,studentfs.fileName, studentfs.point, studentfs.file from studentfs,users where studentfs.acc = users.id and studentfs.lpostId = ${id}
            `);

            resolve(test)
        } catch (error) {
            reject(error)
        }
    })
}

let iuiu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {

            let [test] = await sequelize.query(`
            SELECT users.id as userid, users.firstName, users.lastName,studentfs.fileName, studentfs.point, studentfs.file from studentfs,users where studentfs.acc = users.id and studentfs.lpostId = ${id}
            `);

            resolve(test)
        } catch (error) {
            reject(error)
        }
    })
}

let eose = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(id)
            if (ids <= 100 && ids > 0) {
                let [test] = await sequelize.query(`
            UPDATE studentfs SET point = ${ids} WHERE studentfs.id = ${id}           `);

                resolve(true)
            }
            else {
                // let usercheck = {}
                let errM = 'Score must be > 0 and <= 100'
                resolve(errM)
            }

        } catch (error) {
            reject(error)
        }
    })
}


let nechun = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {

            if (id) {
                let [test] = await sequelize.query(`
            SELECT users.id as userid, users.firstName, users.lastName, studentfs.point, studentfs.file from studentfs,users where studentfs.acc = users.id and studentfs.chosan= ${id}
            `);
                resolve(test)
            }
            else {
                let [test] = await sequelize.query(`
                SELECT users.id as userid, users.firstName, users.lastName, studentfs.point, studentfs.file from studentfs,users where studentfs.acc = users.id 
                `);
                resolve(test)
            }


        } catch (error) {
            reject(error)
        }
    })
}

let scorejs = (id) => {
    return new Promise(async (resolve, reject) => {
        try {

            let [test] = await sequelize.query(`
            SELECT SUM(studentfs.point) as pop FROM studentfs WHERE studentfs.acc = ${id}
            `);
            // console.log(test.TextRow)
            resolve(test)



        } catch (error) {
            reject(error)
        }
    })
}


let tqt = () => {
    return new Promise(async (resolve, reject) => {
        try {

            let [test] = await sequelize.query(`
            SELECT posts.text, users.firstName, posts.id, users.lastName, users.image from posts, users WHERE posts.accId = users.id
            `);
            // console.log(test.TextRow)
            resolve(test)



        } catch (error) {
            reject(error)
        }
    })
}

let textsearch = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {

            let [test] = await sequelize.query(`
             SELECT posts.text, users.firstName, posts.id, users.lastName, users.image from posts, users WHERE posts.accId = users.id AND posts.text LIKE '%${id}%'
            `);
            // console.log(test.TextRow)
            resolve(test)



        } catch (error) {
            reject(error)
        }
    })
}


let tionemo = () => {
    return new Promise(async (resolve, reject) => {
        try {

            let [test] = await sequelize.query(`
             SELECT * from emojis
            `);
            // console.log(test.TextRow)
            resolve(test)



        } catch (error) {
            reject(error)
        }
    })
}

let classpostGet = (id) => 
{
    return new Promise(async (resolve, reject) => {
        try {
            let uiko = await db.Lpost.findOne({
                where: {
                   id: id
                },
                raw: true
            })
            resolve(uiko)
        } catch (error) {
            reject(error)
        }
    })
}

let classgetdocument = (id, ids) =>
{
    return new Promise(async (resolve, reject) => {
        try {
            let uiko = await db.Studentf.findAll({
                where: {
                   acc: id,
                   chosan: ids
                },
                raw: true
            })
            resolve(uiko)
        } catch (error) {
            reject(error)
        }
    })
}

let msgmes = (id,ids,idss) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = db.Messager.create({
                idacc: id,
                idpost: ids,
                message: idss
            })
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}

let listmsgbox = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = db.Messager.findAll({
                where: {
                    idpost: id
                }
            })
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}


module.exports = {
    listmsgbox:listmsgbox,
    msgmes:msgmes,
    classgetdocument:classgetdocument,
    classpostGet:classpostGet,
    tionemo: tionemo,
    textsearch: textsearch,
    tqt: tqt,
    scorejs: scorejs,
    nechun: nechun,
    eose: eose,
    iuiu: iuiu,
    scoregetall: scoregetall,
    wcount: wcount,
    updateall: updateall,
    studenfile: studenfile,
    delpdf: delpdf,
    fileallget: fileallget,
    postfile: postfile,
    putpost: putpost,
    offkick: offkick,
    ceot: ceot,
    delstuden: delstuden,
    classget: classget,
    classcode: classcode,
    lpostdel: lpostdel,
    offget: offget,
    opc: opc,
    pir: pir,
    upuser: upuser,
    chartttt: chartttt,
    rolesearch: rolesearch,
    postdelete: postdelete,
    dellearn: dellearn,
    getLearn: getLearn,
    createGro: createGro,
    getAccept: getAccept,
    getAllAdmin: getAllAdmin,
    deleteaccounts: deleteaccounts,
    setchange: setchange,
    idkpost: idkpost,
    deleteGroup: deleteGroup,
    searchforaff: searchforaff,
    deleteafk: deleteafk,
    fsearchff: fsearchff,
    listcomment: listcomment,
    commento: commento,
    dislikein: dislikein,
    likein: likein,
    pioy: pioy,
    poi: poi,
    listAct: listAct,
    nameger: nameger,
    mop: mop,
    dmmn: dmmn,
    activa: activa,
    takeaway: takeaway,
    okkgr: okkgr,
    groups: groups,
    profile: profile,
    kdps: kdps,
    commit: commit,
    countt: countt,
    random: random,
    reqfr: reqfr,
    fsearched: fsearched,
    brei: brei,
    delffriednd: delffriednd,
    handleUserLogin: handleUserLogin,
    getUsers: getUsers,
    handleUserReg: handleUserReg,
    handleEdit: handleEdit,
    handleDele: handleDele,
    handlePass: handlePass,
    validate: validate,
    handleForgot: handleForgot,
    handleChange: handleChange,
    getAllUsers: getAllUsers,
    getRefresh: getRefresh,
    header: header,
    allaccount: allaccount,
    getFriends: getFriends,
    ffriednd: ffriednd,
    fsearch: fsearch,
    logou: logou,
    getRole: getRole
}