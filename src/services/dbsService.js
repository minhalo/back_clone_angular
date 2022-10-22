import db from "../models/index"


let dropTest = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.sequelize.drop()

      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

let createTest = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.sequelize.sync()

      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}


module.exports = {
  dropTest: dropTest,
  createTest: createTest
}
