import db from "../models/index"


let ban_User = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {
        errCode: 0,
        errMessage: "Unban successfully"
      }
      let user = await db.User.findOne({
        where: { id: id }
      })
      let stat = 1
      if (user.status) {
        stat = 0
        data.errMessage = "Ban successfully"
      }

      await db.User.update({ status: stat },
        { where: { id: id } })

      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = ban_User
