import get_all_role from "../dB_handle/getRole"
import updateRole from "../dB_handle/updateRole"
import deleteRole from "../dB_handle/delRole"

let getRole = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await get_all_role()
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

let roleUpdate = (id, name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await updateRole(id, name)
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

let roleDelete = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await deleteRole(id)
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  getRole: getRole,
  roleUpdate: roleUpdate,
  roleDelete: roleDelete
}
