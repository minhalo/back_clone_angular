import dbsService from "../services/dbsService"

let dropTable = async (req, res) => {
  let userData = await dbsService.dropTest()

  return res.status(200).json(userData)
}

let createTable = async (req, res) => {
  let userData = await dbsService.createTest()

  return res.status(200).json(userData)
}

module.exports = {
  dropTable: dropTable,
  createTable: createTable
}
