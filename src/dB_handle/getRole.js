import db from "../models/index"


let get_all_role = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let role = await db.Role.findAll({
        order: [['id', 'ASC']],

      })

      resolve(role)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = get_all_role
