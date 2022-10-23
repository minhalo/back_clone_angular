import db from "../models/index"


let addressCreate = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Address.findOne({
        where: { name: name }
      })
      let check = false
      if (!data) {
        let address = {
          name: name
        }
        await db.Address.create(address)
        check = true
      }

      resolve(check)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = addressCreate
