import db from "../models/index"


let getGender = (token) => {
  return new Promise(async (resolve, reject) => {
    try {

      let gender = await db.Gender.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        order: [['id', 'ASC']]
      })

      resolve(gender)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getGender
