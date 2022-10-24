import db from "../models/index"


let createProduct = (id, name, title, status, price, discount, time, note, image) => {
  return new Promise(async (resolve, reject) => {
    try {

      let product = {
        name: name,
        title: title,
        status: status,
        price: price,
        discount: discount,
        timeleft: time,
        note: note,
        image: image,
        listId: id
      }
      await db.Product.create(product)

      let check = {
        errCode: 0,
        errMessage: "Create product successfully"
      }

      resolve(check)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = createProduct
