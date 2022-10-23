import db from "../models/index"


let createList = (id, name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.List.findOne({
        where: { name: name }
      })
      let check = false
      if (!data) {
        let list = {
          name: name,
          categoryId: id
        }
        await db.List.create(list)
        check = true
      }

      resolve(check)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = createList
