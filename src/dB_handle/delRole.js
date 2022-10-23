import db from "../models/index"


let deleteRole = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {
        errCode: 0,
        errMessage: "delete successfully"
      }

      if (!id) {
        data.errCode = 1,
          data.errMessage = "Id not found"
      }

      if (id == 1) {
        data.errCode = 1,
          data.errMessage = "Can not delete user"
      }
      if (id == 2) {
        data.errCode = 1,
          data.errMessage = "Can not delete admin"
      }

      if (id != 1 && id != 2 && id) {
        await db.Role.destroy(
          { where: { id: id } })
      }


      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = deleteRole
