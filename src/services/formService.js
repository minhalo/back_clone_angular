import getGender from "../dB_handle/getGender"
import getAddress from "../dB_handle/getAddress"
import createGender from "../dB_handle/createGender"
import createAddress from "../dB_handle/createAddress"
import updateGender from "../dB_handle/updateGender"
import updateAddress from "../dB_handle/updateAddress"
import deleteGender from "../dB_handle/delGender"
import deleteAddress from "../dB_handle/delAddress"

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

let genderUpdate = (id, name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {
        errCode: 0,
        errMessage: "Update gender successfully"
      }
      await updateGender(id, name)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

let addressUpdate = (id, name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {
        errCode: 0,
        errMessage: "Update address successfully"
      }
      await updateAddress(id, name)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

let genderDelete = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {
        errCode: 0,
        errMessage: "Delete gender successfully"
      }
      await deleteGender(id)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

let addressDelete = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {
        errCode: 0,
        errMessage: "Delete address successfully"
      }
      await deleteAddress(id)
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
  addressCreate: addressCreate,
  genderUpdate: genderUpdate,
  addressUpdate: addressUpdate,
  genderDelete: genderDelete,
  addressDelete: addressDelete
}
