import db from "../models/index"


let deleteGender = (id) => {
  return new Promise(async (resolve, reject) => {
    try {

      await db.Gender.destroy(
        { where: { id: id } })


      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = deleteGender
