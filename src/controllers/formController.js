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

let updateGender = async (req, res) => {
  let id = req.query.id
  let name = req.body.name
  let userData = await formService.genderUpdate(id, name)

  return res.status(200).json(userData)
}

let updateAddress = async (req, res) => {
  let id = req.query.id
  let name = req.body.name
  let userData = await formService.addressUpdate(id, name)

  return res.status(200).json(userData)
}

let deleteGender = async (req, res) => {
  let id = req.query.id
  let userData = await formService.genderDelete(id)
  return res.status(200).json(userData)
}

let deleteAddress = async (req, res) => {
  let id = req.query.id
  let userData = await formService.addressDelete(id)
  return res.status(200).json(userData)
}

module.exports = {
  getGender: getGender,
  getAddress: getAddress,
  createGender: createGender,
  createAddress: createAddress,
  updateGender: updateGender,
  updateAddress: updateAddress,
  deleteGender: deleteGender,
  deleteAddress: deleteAddress
}
