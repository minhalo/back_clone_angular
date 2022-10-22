import db from "../models/index"

let getOneUser_db = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user_email = await db.User.findOne({
        where: { id: id },
        attributes: { exclude: ['password', 'email', 'createdAt', 'updatedAt', 'RoleId', 'token'] },
        order: [['id', 'ASC']]
      })

      resolve(user_email)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getOneUser_db
