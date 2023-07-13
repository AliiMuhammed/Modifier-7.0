const util = require("util");
const {connection} = require('../DB/dbConnection');


  async function getUserById(id) {
    const query = util.promisify(connection.query).bind(connection);
    const users = await query("SELECT * FROM users WHERE id = ?", [id]);
    return users;
  }

  async function updateUser(id, userObj) {
    const query = util.promisify(connection.query).bind(connection);
    await query("UPDATE users SET ? WHERE id = ?", [userObj, id]);
  }

  async function updateimage(id, userObj) {
    const query = util.promisify(connection.query).bind(connection);
    await query("UPDATE users SET ? WHERE id = ?", [userObj, id]);
  }

  async function deleteUser(id) {
    const query = util.promisify(connection.query).bind(connection);
    await query("delete from users  where id =?", [id]);
  }

  async function showusers() {
    const query = util.promisify(connection.query).bind(connection);
    return await query("select * from users");
  }

module.exports = {getUserById, updateUser, deleteUser, showusers, updateimage}