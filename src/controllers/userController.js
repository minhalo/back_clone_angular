
import userService from "../services/userService"

let alluser = async (req, res) => {
  let authorization = req.header("authorization")
  let token = authorization.split(' ')[0]
  let userData = await userService.getAllUser(token)

  return res.status(200).json(userData)
}

let banUser = async (req, res) => {
  let id = req.query.id
  let userData = await userService.userBan(id)
  let data = {
    errCode: userData.errCode,
    message: userData.errMessage,
  }
  return res.status(200).json(data)
}

let deleteUser = async (req, res) => {
  let id = req.query.id
  let userData = await userService.userDelete(id)
  let data = {
    errCode: userData.errCode,
    message: userData.errMessage,
  }
  return res.status(200).json(data)
}

let getSpecificUser = async (req, res) => {
  let id = req.query.id
  let userData = await userService.getOneUser(id)
  return res.status(200).json(userData)
}

let createRole = async (req, res) => {
  let name = req.body.name
  let userData = await userService.roleCreate(name)
  return res.status(200).json(userData)
}

let updateUserByAdmin = async (req, res) => {
  let name = req.body.name
  let address = req.body.address
  let gender = req.body.gender
  let age = req.body.age
  let gmail = req.body.gmail
  let id = req.query.id


  let userData = await userService.adminUpdateUser(id, name, address, gender, age, gmail)
  return res.status(200).json(userData)
}


module.exports = {
  createRole: createRole,
  alluser: alluser,
  banUser: banUser,
  deleteUser: deleteUser,
  getSpecificUser: getSpecificUser,
  updateUserByAdmin: updateUserByAdmin
}
