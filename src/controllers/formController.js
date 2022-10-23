import formService from "../services/formService"

// let dropTable = async (req, res) => {
//   let userData = await dbsService.dropTest()

//   return res.status(200).json(userData)
// }


let getGender = async (req, res) => {
  let userData = await formService.formGender()

  return res.status(200).json(userData)
}

let getAddress = async (req, res) => {
  let userData = await formService.formAddress()

  return res.status(200).json(userData)
}


module.exports = {
  getGender: getGender,
  getAddress: getAddress
}
