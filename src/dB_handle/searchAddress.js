import db from "../models/index"

let searchAddress = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const address = await db.sequelize.query(`SELECT * FROM Addresses WHERE Addresses.name LIKE '${name}%' `);
      var resultArray = Object.values(JSON.parse(JSON.stringify(address[0])))
      resolve(resultArray)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = searchAddress
