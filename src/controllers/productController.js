import productService from "../services/productService"

let createCategory = async (req, res) => {
  let name = req.body.name

  let userData = await productService.categoryCreate(name)
  return res.status(200).json(userData)
}

module.exports = {
  createCategory: createCategory
}
