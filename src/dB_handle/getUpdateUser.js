import db from "../models/index"


let getUpdateUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let role = await db.User.findOne({
        where: { id: id },

        attributes: { exclude: ['createdAt', 'updatedAt', 'token', 'email', 'password', 'status', 'id', 'image'] },
      })

      resolve(role)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getUpdateUser
