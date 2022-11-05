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
  if (name) {
    let userData = await formService.genderCreate(name)
    return res.status(200).json(userData)
  }
  else {
    return res.status(200).json({
      errCode: 1,
      errMessage: "invalid gender"
    })
  }

}

let createAddress = async (req, res) => {
  let name = req.body.name

  if (name) {
    let userData = await formService.addressCreate(name)
    return res.status(200).json(userData)
  }
  else {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Invalid address"
    })
  }

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

let searchGender = async (req, res) => {
  let name = req.body.name
  let userData = await formService.genderSearch(name)
  return res.status(200).json(userData)
}

let searchAddress = async (req, res) => {
  let name = req.body.name
  let userData = await formService.addressSearch(name)
  return res.status(200).json(userData)
}

let searchCategory = async (req, res) => {
  let name = req.body.name
  let userData = await formService.categorySearch(name)
  return res.status(200).json(userData)
}

let searchList = async (req, res) => {
  let name = req.body.name
  let userData = await formService.listSearch(name)
  return res.status(200).json(userData)
}

let deleteCategory = async (req, res) => {
  let id = req.query.id
  let userData = await formService.categoryDelete(id)
  return res.status(200).json(userData)
}

let deleteList = async (req, res) => {
  let id = req.query.id
  let userData = await formService.listDelete(id)
  return res.status(200).json(userData)
}


module.exports = {
  searchAddress: searchAddress,
  searchGender: searchGender,
  getGender: getGender,
  getAddress: getAddress,
  createGender: createGender,
  createAddress: createAddress,
  updateGender: updateGender,
  updateAddress: updateAddress,
  deleteGender: deleteGender,
  deleteAddress: deleteAddress,
  searchCategory: searchCategory,
  searchList: searchList,
  deleteCategory: deleteCategory,
  deleteList: deleteList
}
