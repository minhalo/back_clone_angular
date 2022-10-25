import db from "../models/index"

let getProductByPage = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await db.sequelize.query(`SELECT * FROM Products LIMIT ${id * 10},10`);
      var resultArray = Object.values(JSON.parse(JSON.stringify(users[0])))
      resolve(resultArray)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getProductByPage
