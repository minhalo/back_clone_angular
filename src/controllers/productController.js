import productService from "../services/productService"

let createCategory = async (req, res) => {
  let name = req.body.name

  let userData = await productService.categoryCreate(name)
  return res.status(200).json(userData)
}

let getCategory = async (req, res) => {
  let userData = await productService.categoryGet()
  return res.status(200).json(userData)
}

let createList = async (req, res) => {
  let name = req.body.name
  let id = req.body.id
  let userData = await productService.listCreate(id, name)
  return res.status(200).json(userData)
}


module.exports = {
  createCategory: createCategory,
  getCategory: getCategory,
  createList: createList
}
