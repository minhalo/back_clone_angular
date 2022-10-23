import db from "../models/index"


let getCategory = (token) => {
  return new Promise(async (resolve, reject) => {
    try {

      let category = await db.Category.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        order: [['id', 'ASC']]
      })

      resolve(category)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getCategory
