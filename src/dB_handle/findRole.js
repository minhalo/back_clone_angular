import db from "../models/index"

let find_role = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user_email = await db.User.findOne({
        where: { email: email }
      })

      let role = user_email.roleId
      resolve(role)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = find_role
