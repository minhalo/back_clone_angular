import db from "../models/index"

let getProductByList = (id) => {
  return new Promise(async (resolve, reject) => {
    try {

      let list = await db.List.findOne({
        where: { id: id }
      })

      let product = {}

      if (list) {
        const users = await db.sequelize.query(`SELECT Products.id, Products.name, Products.title, Products.status, Products.price, Products.discount, Products.timeleft, Products.note, Lists.name as 'type', Products.image  FROM Products LEFT JOIN Lists  On Products.ListId = Lists.id WHERE Lists.id = ${id}`);
        product = Object.values(JSON.parse(JSON.stringify(users[0])))
      }


      resolve(product)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getProductByList
