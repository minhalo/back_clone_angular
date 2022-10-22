import db from "../models/index"

let getOneUser_db = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user_email = await db.User.findOne({
        where: { id: id },
        attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'token'] },
      })

      let role = await db.Role.findOne({
        where: { id: user_email.roleId },
      })

      let user = {
        id: user_email.id,
        image: user_email.image,
        role: role.nameRole,
        name: user_email.name,
        age: user_email.age,
        address: user_email.address,
        gender: user_email.gender,
        gmail: user_email.gmail
      }

      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getOneUser_db
