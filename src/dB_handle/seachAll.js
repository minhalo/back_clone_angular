import db from "../models/index"
import Op from "../db_useless/db_validate.js"
import verify_token from "../middleware/verify_token"

let seachAll = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      let cur_token = await verify_token(token)
      const users = await db.sequelize.query(`SELECT Count(*) as Total FROM Users LEFT JOIN Roles  On Users.RoleId = Roles.id WHERE Users.id NOT IN ('${cur_token.id}') ORDER BY Users.id ASC `);
      var resultArray = Object.values(JSON.parse(JSON.stringify(users[0])))
      resolve(resultArray[0])
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = seachAll
