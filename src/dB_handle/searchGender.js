import db from "../models/index"

let searchGender = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const role = await db.sequelize.query(`SELECT * FROM Genders WHERE Genders.name LIKE '${name}%' `);
      var resultArray = Object.values(JSON.parse(JSON.stringify(role[0])))
      resolve(resultArray)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = searchGender
