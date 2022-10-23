import get_all_role from "../dB_handle/getRole"

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

module.exports = {
  getRole: getRole
}
