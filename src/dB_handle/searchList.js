// searchList

import db from "../models/index"

let searchList = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const list = await db.sequelize.query(`SELECT * FROM Lists WHERE Lists.name LIKE '${name}%' `);
      var resultArray = Object.values(JSON.parse(JSON.stringify(list[0])))
      resolve(resultArray)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = searchList
