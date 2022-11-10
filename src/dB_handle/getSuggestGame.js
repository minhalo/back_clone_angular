import db from "../models/index"

let getSuggestGame = () => {
  return new Promise(async (resolve, reject) => {
    try {

      const users = await db.sequelize.query(`SELECT *, Lists.name as type FROM Products LEFT JOIN Lists ON Products.listId = Lists.id ORDER BY 37*(UNIX_TIMESTAMP() ^ Products.id) & 0xffff LIMIT 4`);
      let product = Object.values(JSON.parse(JSON.stringify(users[0])))

      resolve(product)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getSuggestGame
