import db from "../models/index"


let getList = (token) => {
  return new Promise(async (resolve, reject) => {
    try {

      let list = await db.List.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        order: [['id', 'ASC']]
      })

      resolve(list)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getList
