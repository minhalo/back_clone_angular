import db from "../models/index"
import bcrypt from 'bcryptjs'
import data_for_user from '../Validators/register'
import check_user_by_email from "../dB_handle/user"
import check_user_by_email_login from '../dB_handle/login'
import data_for_user_login from "../Validators/login"

let handleUserReg = (email, password, cpassword) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {}
      let user = await check_user_by_email(email)
      let register_check_validator = await data_for_user(email, password, cpassword)
      if (register_check_validator.validate) {
        if (!user) {
          const hash = bcrypt.hashSync(password, 10);
          let user_db = {
            email: email,
            password: hash,
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
          userData.errCode = 3;
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
            errCode: 3,
            errMessage: "Login failed",
          }
        }
        else {
          userData = {
            errCode: 4,
            errMessage: "Wrong password",
          }
          let check = await bcrypt.compare(password, user.password);
          if (check) {
            userData = {
              errCode: 0,
              errMessage: "Login successfully",
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



module.exports = {
  handleUserLogin: handleUserLogin,
  handleUserReg: handleUserReg,
}
