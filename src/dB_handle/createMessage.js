import db from "../models/index"
import verify_token from "../middleware/verify_token"


let createMessage = (UserId, ProductId, message) => {
  return new Promise(async (resolve, reject) => {
    try {

      let cur_token = await verify_token(UserId)

      let data = {
        UserId: cur_token.id,
        ProductId: ProductId,
        mes: message
      }
      await db.Message.create(data)



      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = createMessage
