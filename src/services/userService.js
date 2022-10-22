import getAllUser_db from "../dB_handle/getAllUser"
import ban_User from "../dB_handle/banUser"
import del_User from "../dB_handle/delUser"
import getOneUser_db from "../dB_handle/getOneUser"

let getAllUser = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await getAllUser_db(token)
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

let userBan = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {}
      if (id) {
        let check = await ban_User(id)
        data.errCode = check.errCode
        data.errMessage = check.errMessage
      }
      else {
        data.errCode = 1
        data.errMessage = "No account available"
      }
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

let userDelete = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {}
      if (id) {
        let check = await del_User(id)
        data.errCode = check.errCode
        data.errMessage = check.errMessage
      }
      else {
        data.errCode = 1
        data.errMessage = "No account available"
      }
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

let getOneUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await getOneUser_db(id)
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  getAllUser: getAllUser,
  userBan: userBan,
  userDelete: userDelete,
  getOneUser: getOneUser
}
