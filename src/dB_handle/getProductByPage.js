import db from "../models/index"

let getProductByPage = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await db.sequelize.query(`SELECT Products.id, Products.name, Products.title, Products.status, Products.price, Products.discount, Products.timeleft, Products.note, Lists.name as 'type', Products.image  FROM Products LEFT JOIN Lists  On Products.ListId = Lists.id ORDER BY Products.id DESC LIMIT ${(id * 10) - 10},20`);
      var resultArray = Object.values(JSON.parse(JSON.stringify(users[0])))

      let b = []
      let count = 0;
      let cancel = 0

      for (var i = 0; i < resultArray.length; i = i + 4) {
        b[count] = []
        for (var j = i; j < i + 4; j++) {
          if (resultArray[j]) {
            b[count][cancel++] = resultArray[j]
          }
        }
        count += 1
        cancel = 0
      }


      resolve(b)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getProductByPage
