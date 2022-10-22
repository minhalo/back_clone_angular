import db from "../models/index"


let del_User = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {
        errCode: 0,
        errMessage: "delete successfully"
      }


      await db.User.destroy(
        { where: { id: id } })

      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = del_User
