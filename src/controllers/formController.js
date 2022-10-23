import formService from "../services/formService"

let getGender = async (req, res) => {
  let userData = await formService.formGender()

  return res.status(200).json(userData)
}

let getAddress = async (req, res) => {
  let userData = await formService.formAddress()

  return res.status(200).json(userData)
}

let createGender = async (req, res) => {
  let name = req.body.name
  let userData = await formService.genderCreate(name)

  return res.status(200).json(userData)
}

let createAddress = async (req, res) => {
  let name = req.body.name
  let userData = await formService.addressCreate(name)

  return res.status(200).json(userData)
}


module.exports = {
  getGender: getGender,
  getAddress: getAddress,
  createGender: createGender,
  createAddress: createAddress
}
