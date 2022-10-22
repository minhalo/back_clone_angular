import db from "../models/index"
import Op from "../db_useless/db_validate.js"
import jwt from "../../node_modules/jsonwebtoken"
import verify_token from "../middleware/verify_token"

let getAllUser_db = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      let cur_token = await verify_token(token)
      let user_email = await db.User.findAll({
        where: { id: { [Op.not]: cur_token.id } },
        attributes: { exclude: ['password', 'email', 'createdAt', 'updatedAt', 'RoleId', 'token'] },
        order: [['id', 'ASC']]
      })

      resolve(user_email)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getAllUser_db
