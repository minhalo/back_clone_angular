import db from "../models/index"

let productGet = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let product = await db.Product.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      })

      resolve(product)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = productGet
