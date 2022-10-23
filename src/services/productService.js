import createCategory from "../dB_handle/createCategory"


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

      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  categoryCreate: categoryCreate
}
