import db from "../models/index"


let updateRole = (id, name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {
        errCode: 0,
        errMessage: "Update successfully"
      }

      if (!name) {
        data.errCode = 1,
          data.errMessage = "Name not found"
      }
      if (id == 1) {
        data.errCode = 1,
          data.errMessage = "Can not update user"
      }
      if (id == 2) {
        data.errCode = 1,
          data.errMessage = "Can not update Admin"
      }
      if (id != 1 && id != 2 && name) {
        await db.Role.update({ nameRole: name },
          { where: { id: id } })
      }

      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = updateRole
