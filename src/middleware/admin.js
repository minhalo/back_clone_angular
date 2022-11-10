import jwt from "../../node_modules/jsonwebtoken"
import token_expired from "../dB_handle/token_exprire"


let admin_verify = async (req, res, next) => {
  let authorization = req.header("authorization")

  if (authorization) {
    let token = authorization.split(' ')[0]
    let token_check = authorization.split(' ')[1]
    let cur_token = await verify_token(token)
    if (cur_token.role == 'Admin' && token_check == 'bearer') {
      next()
    }
    else {
      return res.status(401).json("Authentication failed")
    }
  }
  else {
    return res.status(401).json("Authentication failed")
  }


}


let admin_verifican = async (req, res, next) => {
  let authorization = req.body.authorization
  if (authorization) {

    let token = authorization.split(' ')[0]

    let token_check = authorization.split(' ')[1]

    let cur_token = await verify_token(token)
    if (cur_token.role == 'Admin' && token_check == 'bearer') {
      next()
    }
    else {
      return res.status(401).json("Authentication failed")
    }
  }
  else {
    return res.status(401).json("Authentication failed")
  }


}

let admin_checkout = async (req, res, next) => {

  next()
}


let verify_token = async (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      let cur_token = false
      if (token) {
        let check = await token_expired(token)
        if (check) {
          cur_token = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        }
      }
      resolve(cur_token)
    } catch (error) {

    }

  })
}





module.exports = {
  admin_verify: admin_verify,
  admin_checkout: admin_checkout,
  admin_verifican: admin_verifican
}
