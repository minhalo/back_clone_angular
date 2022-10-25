import db from "../models/index"


let updateProduct = (id, name, title, status, price, discount, time, note, image) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = await db.Product.findOne({
        where: { id: id }
      })

      let message = {
        errCode: 1,
        errMessage: "Product not found",
      }
      if (userData) {
        let data = {
          name: name,
          title: title,
          status: status,
          price: price,
          discount: discount,
          timeleft: time,
          note: note,
          image: image
        }

        await db.Product.update(data,
          { where: { id: id } })

        message.errCode = 0,
          message.errMessage = "Update product successfully"
      }


      resolve(message)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = updateProduct
