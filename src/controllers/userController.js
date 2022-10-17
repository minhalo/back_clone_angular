
import userService from "../services/userService"

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let userData = await userService.handleUserLogin(email, password)

  let data = {
    errCode: userData.errCode,
    message: userData.errMessage,
  }

  if (userData.id) {
    data.id = userData.id
  }
  return res.status(200).json(data)
}

let handleRegister = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let cpassword = req.body.cpassword;

  let userData = await userService.handleUserReg(email, password, cpassword)
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
  })

}

module.exports = {
  handleLogin: handleLogin,
  handleRegister: handleRegister,
}
