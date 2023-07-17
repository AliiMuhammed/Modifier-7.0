const util = require("util");
const {connection} = require('../DB/dbConnection');


  async function getmessageById(id) {
    const query = util.promisify(connection.query).bind(connection);
    const messages = await query("SELECT * FROM contactUs WHERE id = ?", [id]);
    return messages;
  }

  async function createMessage(messageObj) {
    const query = util.promisify(connection.query).bind(connection);
    await query("insert into contactUs set ? ", [messageObj]);
  }

  async function deleteMessage(id) {
    const query = util.promisify(connection.query).bind(connection);
    await query("delete from contactUs  where id =?", [id]);
  }

  async function showMessages() {
    const query = util.promisify(connection.query).bind(connection);
    return await query("select * from contactUs");
  }


module.exports = {getmessageById, deleteMessage, createMessage, showMessages}