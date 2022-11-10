import db from "../models/index"


let deleteCart = (id) => {
  return new Promise(async (resolve, reject) => {
    try {

      await db.Cart.destroy(
        { where: { id: id } })


      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = deleteCart
