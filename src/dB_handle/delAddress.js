import db from "../models/index"


let deleteAddress = (id) => {
  return new Promise(async (resolve, reject) => {
    try {

      await db.Address.destroy(
        { where: { id: id } })


      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = deleteAddress
