import db from "../models/index"

let token_expire = (token) => {
  return new Promise(async (resolve, reject) => {
    try {

      let user_email = await db.User.findOne({
        where: { token: token },
        raw: true
      })

      let check = false
      if (user_email) {
        check = true
      }


      resolve(check)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = token_expire
