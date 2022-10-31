import db from "../models/index"

let pageGet = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.sequelize.query(`SELECT COUNT(*) as Page FROM Products`);
      var resultArray = Object.values(JSON.parse(JSON.stringify(user[0])))
      let page = resultArray[0].Page

      resolve({
        page: ((page / 10) - 1) * 10
      })

    } catch (error) {
      reject(error)
    }
  })
}

module.exports = pageGet
