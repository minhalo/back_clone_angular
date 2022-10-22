import db from "../models/index"


let find_one = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = false
      let user_email = await db.User.findOne({
        where: { email: email }
      })
      if (user_email) {
        check = true
      }
      resolve(check)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = find_one
