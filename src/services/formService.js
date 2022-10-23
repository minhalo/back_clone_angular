import getGender from "../dB_handle/getGender"
import getAddress from "../dB_handle/getAddress"
import createGender from "../dB_handle/createGender"
import createAddress from "../dB_handle/createAddress"

let formGender = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await getGender(name)

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

let genderCreate = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {
        errCode: 0,
        errMessage: "Create gender successfully"
      }

      let check = await createGender(name)

      if (!check) {
        data.errCode = 1,
          data.errMessage = "Create gender failed"
      }
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

let addressCreate = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {
        errCode: 0,
        errMessage: "Create address successfully"
      }

      let check = await createAddress(name)

      if (!check) {
        data.errCode = 1,
          data.errMessage = "Create address failed"
      }
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}


module.exports = {
  formGender: formGender,
  formAddress: formAddress,
  genderCreate: genderCreate,
  addressCreate: addressCreate
}
