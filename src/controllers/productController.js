import productService from "../services/productService"
import isNumeric from "../Validators/isNum"

let createCategory = async (req, res) => {
  let name = req.body.name

  if (name) {
    let userData = await productService.categoryCreate(name)
    return res.status(200).json(userData)
  }
  else {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'invalid category'
    })

  }

}

let getCategory = async (req, res) => {
  let userData = await productService.categoryGet()
  return res.status(200).json(userData)
}

let createList = async (req, res) => {
  let name = req.body.name
  let id = req.body.id

  if (name) {
    let userData = await productService.listCreate(id, name)
    return res.status(200).json(userData)
  }
  else {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'invalid list name'
    })

  }

}

let getList = async (req, res) => {
  let userData = await productService.listGet()
  return res.status(200).json(userData)
}

let getListByCat = async (req, res) => {
  let id = req.query.id
  let userData = await productService.listByCatGet(id)
  return res.status(200).json(userData)
}

let createProduct = async (req, res) => {

  let { name, title, status, price, discount, time, note, image, id } = req.body
  if (!id) {
    return res.status(200).json({
      errCode: 8,
      errMessage: "Invalid id"
    })
  }
  if (!name || name.length > 20) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Invalid name"
    })
  }
  if (!title || title.length > 50) {
    return res.status(200).json({
      errCode: 2,
      errMessage: "Invalid title"
    })
  }
  if (!isNumeric(status)) {
    return res.status(200).json({
      errCode: 3,
      errMessage: "Status must be a number"
    })
  }
  if (!isNumeric(price)) {
    return res.status(200).json({
      errCode: 4,
      errMessage: "Price must be a number"
    })
  }
  if (!isNumeric(discount)) {
    return res.status(200).json({
      errCode: 5,
      errMessage: "Discount must be a number"
    })
  }
  if (!isNumeric(time)) {
    return res.status(200).json({
      errCode: 6,
      errMessage: "Time must be a number"
    })
  }
  if (!image) {
    return res.status(200).json({
      errCode: 7,
      errMessage: "Need image"
    })
  }


  let userData = await productService.productCreate(id, name, title, status, price, discount, time, note, image)
  return res.status(200).json(userData)
}

let updateProduct = async (req, res) => {
  let id = req.query.id
  let { name, title, status, price, discount, time, note, image } = req.body
  if (name.length > 20) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Name must be less than 10 characters"
    })
  }
  if (title.length > 50) {
    return res.status(200).json({
      errCode: 2,
      errMessage: "Title must be less than 50 characters"
    })
  }
  if (!isNumeric(status)) {
    return res.status(200).json({
      errCode: 3,
      errMessage: "Status must be a number"
    })
  }
  if (!isNumeric(price)) {
    return res.status(200).json({
      errCode: 4,
      errMessage: "Price must be a number"
    })
  }
  if (!isNumeric(discount)) {
    return res.status(200).json({
      errCode: 5,
      errMessage: "Price must be a number"
    })
  }
  if (!isNumeric(time)) {
    return res.status(200).json({
      errCode: 5,
      errMessage: "Price must be a number"
    })
  }
  if (!isNumeric(image)) {
    return res.status(200).json({
      errCode: 5,
      errMessage: "Price must be a number"
    })
  }


  let userData = await productService.productUpdate(id, name, title, status, price, discount, time, note, image)
  return res.status(200).json(userData)
}

let getProduct = async (req, res) => {
  let userData = await productService.productGet()
  return res.status(200).json(userData)
}

let getProductByList = async (req, res) => {
  let id = req.query.id
  let userData = await productService.productByListGet(id)
  return res.status(200).json(userData)
}
let getProductByPage = async (req, res) => {
  let id = req.query.page
  let userData = await productService.productByPageGet(id)
  return res.status(200).json(userData)
}

let getPage = async (req, res) => {
  let userData = await productService.pageGet()

  return res.status(200).json(userData)
}

let getProductByPageList = async (req, res) => {
  let ListId = req.query.ListId
  let PageId = req.query.PageId


  let userData = await productService.productByPageListGet(ListId, PageId)

  return res.status(200).json(userData)
}

let detail = async (req, res) => {
  let id = req.query.id
  let userData = await productService.getdetail(id)

  return res.status(200).json(userData)
}

let addToCart = async (req, res) => {
  let userId = req.body.userId
  let productId = req.body.productId
  let total = req.body.total


  if (userId && productId) {
    let userData = await productService.addCart(userId, productId, total)
    return res.status(200).json(userData)
  }
  else {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'No sl'
    })
  }
}

module.exports = {
  addToCart: addToCart,
  createCategory: createCategory,
  getCategory: getCategory,
  createList: createList,
  getList: getList,
  getListByCat: getListByCat,
  createProduct: createProduct,
  updateProduct: updateProduct,
  getProduct: getProduct,
  getProductByList: getProductByList,
  getProductByPage: getProductByPage,
  getPage: getPage,
  getProductByPageList: getProductByPageList,
  detail: detail
}
