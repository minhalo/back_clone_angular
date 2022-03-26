import db from "../models/index"
import bcrypt from 'bcryptjs'
const nodemailer = require("nodemailer");
// import sequelize from "../config/connectDB"
const { Sequelize, and } = require('sequelize');
const Op = Sequelize.Op;


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
                                age: null
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
                    attributes: ['id', 'email', 'password', 'firstName', 'address', 'lastName', 'phonenumber'],
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
            // console.log(profileImg)
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
                        console.log(bro)
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
            //   console.log(row)
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
            // console.log(id)

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
                    exclude: ['password', 'id', 'email', 'address', 'phonenumber', 'description', 'ids', 'age', 'gender']
                }
            })
            resolve(user)
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
            let usercheck = await db.Add.findOne({
                where: { idFriend: ids, idAccount: id },
                raw: true
            })
            if (!usercheck) {
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
            SELECT users.id, users.lastName, users.firstName, users.description, users.image
            FROM users, adds
            WHERE users.id = adds.idFriend and adds.idAccount = ${id};
            `);
            resolve(test)
        } catch (error) {
            reject(error)
        }
    })
}

let delffriednd = (id, ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ok = true
            const check = await db.Add.findOne({
                where: { idAccount: id, idFriend: ids },
            });
            if (check) {
                await db.Add.destroy({
                    where: { idAccount: id, idFriend: ids },
                });
                ok = false
            }
            resolve(ok)
        } catch (error) {
            reject(error)
        }
    })
}

let fsearch = (name,id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // let userData = []
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
                // userData.push(check)
                resolve(check)
            }
            // resolve(userData)
        } catch (error) {
            reject(error)
        }
    })
}



module.exports = {
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
    fsearch: fsearch
}