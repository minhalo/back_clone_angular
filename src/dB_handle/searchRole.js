import db from "../models/index"

let searchRole = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const role = await db.sequelize.query(`SELECT * FROM Roles WHERE Roles.nameRole LIKE '${name}%' `);
      var resultArray = Object.values(JSON.parse(JSON.stringify(role[0])))
      resolve(resultArray)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = searchRole
