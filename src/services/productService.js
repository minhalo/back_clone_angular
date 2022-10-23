import createCategory from "../dB_handle/createCategory"
import getCategory from "../dB_handle/getCategory"
import createList from "../dB_handle/createList"

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

module.exports = {
  categoryCreate: categoryCreate,
  categoryGet: categoryGet,
  listCreate: listCreate
}
