import db from "../models/index"
import verify_token from "../middleware/verify_token"


let updateMe = (token, name, age, gender, address, gmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let cur_token = await verify_token(token)

      let user = await db.User.findOne({
        where: { id: cur_token.id }
      })


      console.log(address);
      if (user && name) {
        let data = {
          name: name,
          age: age,
          AddressId: address,
          GenderId: gender,
          gmail: gmail,
        }
        await db.User.update(data,
          { where: { id: cur_token.id } })
      }


      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = updateMe
