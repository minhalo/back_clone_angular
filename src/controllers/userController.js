
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

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let userData = await userService.handleUserLogin(email, password)
  console.log(userData);
  let data = {
    errCode: userData.errCode,
    message: userData.errMessage,
  }

  if (!userData.errCode) {
    data.token = userData.token
    data.status = userData.status
  }
  return res.status(200).json(data)
}

let handleRegister = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let cpassword = req.body.cpassword;

  let userData = await userService.handleUserReg(email, password, cpassword)

  let data = {
    errCode: userData.errCode,
    message: userData.errMessage,
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

let handleLogout = async (req, res) => {
  let authorization = req.header("authorization")
  let token = authorization.split(' ')[0]
  let userData = await userService.logout(token)
  let data = {
    errCode: userData.errCode,
    message: userData.errMessage,
  }
  return res.status(200).json(data)
}

let getSpecificUser = async (req, res) => {
  let id = req.query.id
  let authorization = req.header("authorization")
  let token = authorization.split(' ')[0]
  let userData = await userService.getOneUser(token)
  let data = {
    errCode: userData.errCode,
    message: userData.errMessage,
  }
  return res.status(200).json(data)
}


module.exports = {
  handleLogin: handleLogin,
  handleRegister: handleRegister,
  alluser: alluser,
  banUser: banUser,
  deleteUser: deleteUser,
  handleLogout: handleLogout,
  getSpecificUser: getSpecificUser
}
