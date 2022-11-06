import db from "../models/index"

let detail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await db.sequelize.query(`SELECT Products.id, Products.name, Products.image, Products.title, Products.status, Products.price, Products.discount, Products.timeleft, Products.note, Lists.name as 'type', Products.image  FROM Products LEFT JOIN Lists  On Products.ListId = Lists.id where Products.id = ${id}`);
      var resultArray = Object.values(JSON.parse(JSON.stringify(users[0])))

      resolve(resultArray[0])
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = detail
