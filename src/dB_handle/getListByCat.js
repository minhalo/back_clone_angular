import db from "../models/index"


let listByCatGet = (id) => {
  return new Promise(async (resolve, reject) => {
    try {

      let list = await db.List.findAll({
        where: { CategoryId: id },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        order: [['id', 'ASC']]
      })

      resolve(list)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = listByCatGet
