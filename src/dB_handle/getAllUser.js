import db from "../models/index"
import Op from "../db_useless/db_validate.js"

let getAllUser_db = (id) => {
  return new Promise(async (resolve, reject) => {
    try {

      let user_email = await db.User.findAll({
        where: { id: { [Op.not]: id } },
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
