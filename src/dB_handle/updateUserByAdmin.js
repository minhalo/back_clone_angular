import db from "../models/index"
import isNumeric from "../Validators/isNum"


let adminUpdate_User = (id, name, address, gender, age, gmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {}
      let data = {
        errCode: 0,
        errMessage: "Update successfully"
      }
      console.log(isNumeric(age));

      if (!name) {
        data.errCode = 1,
          data.errMessage = "please enter name"
      }
      if (!age || !isNumeric(age)) {
        data.errCode = 2,
          data.errMessage = "Invalid age"
      }
      if (!gmail) {
        data.errCode = 1,
          data.errMessage = "please enter gmail"
      }
      if (id && name && address && gender && age && gmail && isNumeric(age)) {
        // let user = await db.User.findOne({
        //   where: { id: id }
        // })
        userData = {
          name: name,
          AddressId: address,
          GenderId: gender,
          gmail: gmail,
          age: age
        }
        await db.User.update(userData,
          { where: { id: id } })

      }

      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = adminUpdate_User
