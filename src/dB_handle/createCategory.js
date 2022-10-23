import db from "../models/index"


let createCategory = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Category.findOne({
        where: { name: name }
      })
      let check = false
      if (!data) {
        let category = {
          name: name
        }
        await db.Category.create(category)
        check = true
      }

      resolve(check)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = createCategory
