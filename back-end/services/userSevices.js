const util = require("util");
const { connection } = require("../DB/dbConnection");

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

async function addService(data){
  const query = util.promisify(connection.query).bind(connection);
  const add = await query("select * from users_services where service_id =? and user_id =?", [data.service_id, data.user_id]);
  if(! add.length > 0){
  await query("insert into users_services set ?", [data]);
  return "created"
  }
  else {
    return "Service already selected"
  }
}

module.exports = {
  getUserById,
  updateUser,
  deleteUser,
  showusers,
  updateimage,
  addService
};
