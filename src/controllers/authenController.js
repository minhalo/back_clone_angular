import authenService from '../services/authenservice'

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let userData = await authenService.handleUserLogin(email, password)

  let data = {
    errCode: userData.errCode,
    message: userData.errMessage,
  }

  if (!userData.errCode) {
    data.token = userData.token
    data.status = userData.status
    data.name = userData.name
    data.role = userData.role
    data.coin = userData.coin

  }
  return res.status(200).json(data)
}

let handleRegister = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let cpassword = req.body.cpassword;

  let userData = await authenService.handleUserReg(email, password, cpassword)

  let data = {
    errCode: userData.errCode,
    message: userData.errMessage,
  }

  return res.status(200).json(data)

}

let handleLogout = async (req, res) => {
  let authorization = req.header("authorization")

  let token = authorization.split(' ')[0]
  let userData = await authenService.logout(token)
  let data = {
    errCode: userData.errCode,
    message: userData.errMessage,
  }
  return res.status(200).json(data)
}


let createNewUser = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let role = req.body.role
  let cpassword = req.body.cpassword

  let userData = await authenService.newUserCreate(email, password, role, cpassword)

  let data = {
    errCode: userData.errCode,
    message: userData.errMessage,
  }

  return res.status(200).json(data)

}

let updateMe = async (req, res) => {
  let authorization = req.body.authorization
  let token = authorization.split(' ')[0]
  let name = req.body.name;
  let age = req.body.age;
  let gender = req.body.gender
  let address = req.body.address
  let gmail = req.body.gmail


  let userData = await authenService.meUpdate(token, name, age, gender, address, gmail)

  let data = {
    errCode: userData.errCode,
    message: userData.errMessage,
  }

  return res.status(200).json(data)

}

module.exports = {
  updateMe: updateMe,
  handleLogin: handleLogin,
  handleRegister: handleRegister,
  handleLogout: handleLogout,
  createNewUser: createNewUser
}
