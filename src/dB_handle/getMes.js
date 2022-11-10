import db from "../models/index"

let getMes = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await db.sequelize.query(`SELECT Messages.mes, Users.RoleId,Users.GenderId, Users.name, Messages.createdAt FROM Messages LEFT JOIN Users ON Messages.UserId = Users.id WHERE ProductId =${id} ORDER BY Messages.id DESC`);
      var resultArray = Object.values(JSON.parse(JSON.stringify(users[0])))
      resolve(resultArray)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getMes
