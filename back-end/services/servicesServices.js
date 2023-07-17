const util = require("util");
const {connection} = require('../DB/dbConnection');


  async function getServiceById(id) {
    const query = util.promisify(connection.query).bind(connection);
    const services = await query("SELECT * FROM services WHERE id = ?", [id]);
    return services;
  }

  async function updateService(id, serviceObj) {
    const query = util.promisify(connection.query).bind(connection);
    await query("UPDATE services SET ? WHERE id = ?", [serviceObj, id]);
  }

  async function createService(serviceObj) {
    const query = util.promisify(connection.query).bind(connection);
    await query("insert into services set ? ", [serviceObj]);
  }

  async function deleteService(id) {
    const query = util.promisify(connection.query).bind(connection);
    await query("delete from services  where id =?", [id]);
  }

  async function showservices() {
    const query = util.promisify(connection.query).bind(connection);
    return await query("select * from services");
  }

module.exports = {getServiceById, updateService, deleteService, createService, showservices}