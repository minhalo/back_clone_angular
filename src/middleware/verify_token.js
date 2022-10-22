import jwt from "../../node_modules/jsonwebtoken"

let token_ver = async (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })

}

module.exports = token_ver

