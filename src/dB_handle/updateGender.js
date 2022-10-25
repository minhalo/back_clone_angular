import db from "../models/index"


let updateProduct = (id, name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let gender = await db.Gender.findOne({
        where: { id: id }
      })

      if (gender) {
        let data = {
          name: name,
        }
        await db.Gender.update(data,
          { where: { id: id } })
      }


      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = updateProduct
