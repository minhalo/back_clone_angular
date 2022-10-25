import createCategory from "../dB_handle/createCategory"
import getCategory from "../dB_handle/getCategory"
import createList from "../dB_handle/createList"
import getList from "../dB_handle/getList"
import getListByCat from "../dB_handle/getListByCat"
import createProduct from "../dB_handle/createProduct"
import updateProduct from "../dB_handle/updateProduct"
import getProduct from "../dB_handle/getProduct"
import getProductByList from "../dB_handle/getProductByList"
import getProductByPage from "../dB_handle/getProductByPage"
import getPage from "../dB_handle/getPage"
import getProductByPageList from "../dB_handle/getProductByPageList"

let categoryCreate = (name) => {
  return new Promise(async (resolve, reject) => {
    try {

      let data = {
        errCode: 0,
        errMessage: "Create category successfully"
      }

      let user = await createCategory(name)

      if (!user) {
        data.errCode = 1,
          data.errMessage = "Create category failed"
      }
      resolve(data)

    } catch (error) {
      reject(error)
    }
  })
}

let categoryGet = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await getCategory()
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

let listCreate = (id, name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await createList(id, name)
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

let listGet = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await getList()
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

let listByCatGet = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await getListByCat(id)
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

let productCreate = (id, name, title, status, price, discount, time, note, image) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await createProduct(id, name, title, status, price, discount, time, note, image)

      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

let productUpdate = (id, name, title, status, price, discount, time, note, image) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await updateProduct(id, name, title, status, price, discount, time, note, image)

      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

let productGet = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await getProduct()
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

let productByListGet = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await getProductByList(id)
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

let productByPageGet = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await getProductByPage(id)
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

let pageGet = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await getPage()
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

let productByPageListGet = (ListId, PageId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await getProductByPageList(ListId, PageId)
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}


module.exports = {
  categoryCreate: categoryCreate,
  categoryGet: categoryGet,
  listCreate: listCreate,
  listGet: listGet,
  listByCatGet: listByCatGet,
  productCreate: productCreate,
  productUpdate: productUpdate,
  productGet: productGet,
  productByListGet: productByListGet,
  productByPageGet: productByPageGet,
  pageGet: pageGet,
  productByPageListGet: productByPageListGet,
  productByPageListGet: productByPageListGet
}
