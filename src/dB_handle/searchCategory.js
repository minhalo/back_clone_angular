import db from "../models/index"

let searchCategory = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const cate = await db.sequelize.query(`SELECT * FROM Categories WHERE Categories.name LIKE '${name}%' `);
      var resultArray = Object.values(JSON.parse(JSON.stringify(cate[0])))
      resolve(resultArray)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = searchCategory
