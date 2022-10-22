
import userService from "../services/userService"

let alluser = async (req, res) => {
  let authorization = req.header("authorization")
  let token = authorization.split(' ')[0]
  let userData = await userService.getAllUser(token)

  let data = {
    errCode: userData.errCode,
    message: userData.errMessage,
  }
  if (!userData.errCode) {
    data.user = userData.user
  }
  return res.status(200).json(data)
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
  let data = {
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user
  }
  return res.status(200).json(data)
}


module.exports = {
  alluser: alluser,
  banUser: banUser,
  deleteUser: deleteUser,
  getSpecificUser: getSpecificUser
}
