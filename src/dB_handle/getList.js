import db from "../models/index"


let getList = (token) => {
  return new Promise(async (resolve, reject) => {
    try {

      let list = await db.List.findAll({})

      resolve(list)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getList
