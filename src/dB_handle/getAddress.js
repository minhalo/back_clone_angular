import db from "../models/index"


let getAddress = (token) => {
  return new Promise(async (resolve, reject) => {
    try {

      let address = await db.Address.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        order: [['id', 'ASC']]
      })

      resolve(address)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getAddress
