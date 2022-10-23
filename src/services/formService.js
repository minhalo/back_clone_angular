import getGender from "../dB_handle/getGender"
import getAddress from "../dB_handle/getAddress"

// let dropTest = () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       await db.sequelize.drop()

//       resolve(true)
//     } catch (error) {
//       reject(error)
//     }
//   })
// }


let formGender = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await getGender()

      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

let formAddress = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await getAddress()

      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}


module.exports = {
  formGender: formGender,
  formAddress: formAddress
}
