import db from "../models/index"
import isNumeric from "../Validators/isNum"


let adminUpdate_User = (id, name, address, gender, age, gmail, role, coin) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {}
      let data = {
        errCode: 0,
        errMessage: "Update successfully"
      }


      if (!name) {
        data.errCode = 1,
          data.errMessage = "please enter name"
      }
      if (!address) {
        data.errCode = 2,
          data.errMessage = "please enter address"
      }
      if (!age || !Number.isInteger(age)) {
        data.errCode = 3,
          data.errMessage = "Invalid age"
      }
      if (!gmail) {
        data.errCode = 4,
          data.errMessage = "please enter gmail"
      }
      if (!coin || !Number.isInteger(coin)) {
        data.errCode = 5,
          data.errMessage = "please enter coin"
      }

      if (id && name && address && gender && age && gmail && Number.isInteger(age)) {

        userData = {
          name: name,
          AddressId: address,
          GenderId: gender,
          gmail: gmail,
          age: age,
          RoleId: role,
          coin: coin
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
