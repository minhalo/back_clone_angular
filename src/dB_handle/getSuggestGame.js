import db from "../models/index"

let getSuggestGame = () => {
  return new Promise(async (resolve, reject) => {
    try {

      const users = await db.sequelize.query(`SELECT * FROM Products ORDER BY 37*(UNIX_TIMESTAMP() ^ Products.id) & 0xffff LIMIT 5`);
      let product = Object.values(JSON.parse(JSON.stringify(users[0])))

      resolve(product)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getSuggestGame
