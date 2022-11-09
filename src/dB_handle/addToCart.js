// addToCart/
import db from "../models/index"
import verify_token from "../middleware/verify_token"


let addToCart = (userId, productId, total) => {
  return new Promise(async (resolve, reject) => {
    try {
      let dataset = {
        errCode: 0,
        errMessage: "pass"
      }
      let cur_token = await verify_token(userId)

      let user = await db.User.findOne({
        where: { id: cur_token.id }
      })


      if (user.coin >= total) {
        let coin = user.coin - total
        await db.User.update({ coin: coin },
          { where: { id: cur_token.id } })
        let data = {
          UserId: cur_token.id,
          ProductId: productId,
          total: total
        }
        await db.Cart.create(data)
      }
      else {
        dataset.errCode = 1
        dataset.errMessage = "Not have enough money"

      }

      resolve(dataset)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = addToCart
