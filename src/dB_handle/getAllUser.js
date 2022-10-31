import db from "../models/index"
import Op from "../db_useless/db_validate.js"
import verify_token from "../middleware/verify_token"

let getAllUser_db = (token, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let cur_token = await verify_token(token)
      const users = await db.sequelize.query(`SELECT Users.id, Users.name, Users.coin, Roles.nameRole as role, Users.status, Users.createdAt, Users.updatedAt FROM Users LEFT JOIN Roles  On Users.RoleId = Roles.id WHERE Users.id NOT IN ('${cur_token.id}') ORDER BY Users.id ASC  LIMIT ${(id * 10) - 10},10 `);
      var resultArray = Object.values(JSON.parse(JSON.stringify(users[0])))
      resolve(resultArray)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getAllUser_db
