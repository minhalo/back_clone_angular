import db from "../models/index"


let deleteList = (id) => {
  return new Promise(async (resolve, reject) => {
    try {

      await db.List.destroy(
        { where: { id: id } })


      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = deleteList
