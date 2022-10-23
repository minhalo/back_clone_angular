import db from "../models/index"


let createGender = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Gender.findOne({
        where: { name: name }
      })
      let check = false
      if (!data) {
        let gender = {
          name: name
        }
        await db.Gender.create(gender)
        check = true
      }

      resolve(check)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = createGender
