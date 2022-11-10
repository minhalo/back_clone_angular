import db from "../models/index"
import verify_token from "../middleware/verify_token"


let badge = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      let cur_token = await verify_token(token)
      let category = await db.Cart.count({
        where: { UserId: cur_token.id }
      })

      resolve(category)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = badge
