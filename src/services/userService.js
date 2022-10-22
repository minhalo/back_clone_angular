import db from "../models/index"
import bcrypt from 'bcryptjs'
import data_for_user from '../Validators/register'
import check_user_by_email from "../dB_handle/user"
import check_user_by_email_login from '../dB_handle/login'
import data_for_user_login from "../Validators/login"
import getAllUser_db from "../dB_handle/getAllUser"
import jwt from "../../node_modules/jsonwebtoken"
import ban_User from "../dB_handle/banUser"
import del_User from "../dB_handle/delUser"
import logout_user from "../dB_handle/logout"

let handleUserReg = (email, password, cpassword) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {}
      let user = await check_user_by_email(email)
      let register_check_validator = await data_for_user(email, password, cpassword)

      if (register_check_validator.validate) {
        if (!user) {


          const hash = bcrypt.hashSync(password, 10);
          const token = jwt.sign(
            {
              email: email,
              password: hash,
            }, process.env.ACCESS_TOKEN_SECRET);
          let user_db = {
            email: email,
            password: hash,
            status: 1,
            roleId: 1,
            token: token,
            image: 2
          }
          await db.User.create(user_db)

          userData.errCode = 0;
          userData.errMessage = "Pass validation";
        }
        else {
          userData.errCode = 1;
          userData.errMessage = "Account already exists";
        }
      }
      else {
        if (register_check_validator.errors_pass) {
          userData.errCode = 2;
          userData.errMessage = register_check_validator.errors_pass;
        }
        if (register_check_validator.errors_email) {
          userData.errCode = 1;
          userData.errMessage = register_check_validator.errors_email;
        }
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
      let login_user_validator = await data_for_user_login(email, password)
      if (login_user_validator.validate) {
        let user = await check_user_by_email_login(email)
        if (!user.isvalid) {
          userData = {
            errCode: 2,
            errMessage: "Login failed",
          }
        }
        else {
          userData = {
            errCode: 1,
            errMessage: "Wrong password",
          }
          let check = await bcrypt.compare(password, user.password);
          if (check) {
            userData = {
              errCode: 0,
              errMessage: "Login successfully",
              role: user.account.role,
              token: user.account.token,
              status: user.account.status,
              id: user.account.id
            }
          }

        }
      }
      else {
        if (login_user_validator.errors_pass) {
          userData.errCode = 1;
          userData.errMessage = login_user_validator.errors_pass;
        }
        if (login_user_validator.errors_email) {
          userData.errCode = 2;
          userData.errMessage = login_user_validator.errors_email;
        }
      }
      resolve(userData)
    } catch (error) {
      reject(error)
    }
  })
}

let getAllUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await getAllUser_db(id)
      let data = {
        errCode: 0,
        user: user
      }
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

let userBan = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {}
      if (id) {
        let check = await ban_User(id)
        data.errCode = check.errCode
        data.errMessage = check.errMessage
      }
      else {
        data.errCode = 1
        data.errMessage = "No account available"
      }
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

let userDelete = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {}
      if (id) {
        let check = await del_User(id)
        data.errCode = check.errCode
        data.errMessage = check.errMessage
      }
      else {
        data.errCode = 1
        data.errMessage = "No account available"
      }
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

let logout = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {}
      if (id) {
        let check = await logout_user(id)
        data.errCode = check.errCode
        data.errMessage = check.errMessage
      }
      else {
        data.errCode = 1
        data.errMessage = "No account available"
      }
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}


module.exports = {
  handleUserLogin: handleUserLogin,
  handleUserReg: handleUserReg,
  getAllUser: getAllUser,
  userBan: userBan,
  userDelete: userDelete,
  logout: logout
}
