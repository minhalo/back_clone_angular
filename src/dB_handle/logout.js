import db from "../models/index"
import jwt from "../../node_modules/jsonwebtoken"
import bcrypt from 'bcryptjs'


let logout = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user_email = await db.User.findOne({
        where: { id: id },
        raw: true
      })

      if (user_email) {
        const hash = bcrypt.hashSync(user_email.password, 10);
        let role = await db.Role.findOne({
          where: { id: user_email.roleId },
        })
        const token = jwt.sign(
          {
            email: user_email.email,
            password: hash,
            role: role.nameRole
          }, process.env.ACCESS_TOKEN_SECRET);

        await db.User.update({ token: token },
          { where: { id: user_email.id } })

      }
      resolve({
        errCode: 0,
        errMessage: "Logout successfully"
      })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = logout
