import db from "../models/index"

let getProductByPage = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await db.sequelize.query(`SELECT Products.id, Products.name, Products.title, Products.status, Products.price, Products.discount, Products.timeleft, Products.note, Lists.name as 'type', Products.image  FROM Products LEFT JOIN Lists  On Products.ListId = Lists.id LIMIT ${(id * 10) - 10},10`);
      var resultArray = Object.values(JSON.parse(JSON.stringify(users[0])))

      resolve(resultArray)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getProductByPage
