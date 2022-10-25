import db from "../models/index"


let updateAddress = (id, name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let address = await db.Address.findOne({
        where: { id: id }
      })

      if (address) {
        let data = {
          name: name,
        }
        await db.Address.update(data,
          { where: { id: id } })
      }


      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = updateAddress
