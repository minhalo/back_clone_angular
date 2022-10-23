import roleService from "../services/roleService"

let getAllRole = async (req, res) => {
  let userData = await roleService.getRole()
  return res.status(200).json(userData)
}

module.exports = {
  getAllRole: getAllRole
}
