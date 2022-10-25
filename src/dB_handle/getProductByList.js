import db from "../models/index"

let getProductByList = (id) => {
  return new Promise(async (resolve, reject) => {
    try {

      let list = await db.List.findOne({
        where: { id: id }
      })

      let product = {}

      if (list) {
        product = await db.Product.findAll({
          where: { ListId: id },
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        })
      }


      resolve(product)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getProductByList
