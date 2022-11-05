import db from "../models/index"


let deleteCategory = (id) => {
  return new Promise(async (resolve, reject) => {
    try {

      await db.Category.destroy(
        { where: { id: id } })


      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = deleteCategory
