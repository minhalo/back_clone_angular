import db from "../models/index"
import jwt from "../../node_modules/jsonwebtoken"
import bcrypt from 'bcryptjs'

let check_user_by_email_login = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = false

      let user_email = await db.User.findOne({
        where: { email: email },
        raw: true
      })


      let user = {
        isvalid: check,
      }

      if (user_email) {
        let role = await db.Role.findOne({
          where: { id: user_email.roleId },
        })
        const token = jwt.sign(
          {
            email: user_email.email,
            role: role.nameRole,
            id: user_email.id
          }, process.env.ACCESS_TOKEN_SECRET);

        await db.User.update({ token: token },
          { where: { id: user_email.id } })


        check = true
        user.isvalid = check
        user.password = user_email.password
        user.account = {
          email: user_email.email,
          status: user_email.status,
          token: token,
        }
      }
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = check_user_by_email_login
