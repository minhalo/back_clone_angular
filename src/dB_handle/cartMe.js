import db from "../models/index"
import verify_token from "../middleware/verify_token"

let cartMe = (UserId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let cur_token = await verify_token(UserId)

      const users = await db.sequelize.query(`SELECT Products.id as ProductId, Carts.id as CartId, Products.name, Carts.total FROM Carts LEFT JOIN Products ON Carts.ProductId = Products.id WHERE Carts.UserId = ${cur_token.id}`);
      var resultArray = Object.values(JSON.parse(JSON.stringify(users[0])))
      resolve(resultArray)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = cartMe
