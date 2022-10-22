import db from "../models/index"


let create_role = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Role.findOne({
        where: { nameRole: name }
      })
      let check = false
      if (!data) {
        let role = {
          nameRole: name
        }
        await db.Role.create(role)
        check = true
      }

      resolve(check)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = create_role
