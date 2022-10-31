import roleService from "../services/roleService"

let getAllRole = async (req, res) => {
  let userData = await roleService.getRole()
  return res.status(200).json(userData)
}


let updateRole = async (req, res) => {
  let id = req.query.id
  let name = req.body.name

  let userData = await roleService.roleUpdate(id, name)
  return res.status(200).json(userData)
}

let deleteRole = async (req, res) => {
  let id = req.query.id

  let userData = await roleService.roleDelete(id)
  return res.status(200).json(userData)
}

module.exports = {
  getAllRole: getAllRole,
  updateRole: updateRole,
  deleteRole: deleteRole,

}
