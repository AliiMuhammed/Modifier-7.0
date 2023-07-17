const util = require("util");
const {connection} = require('../DB/dbConnection');


  async function getFeedById(id) {
    const query = util.promisify(connection.query).bind(connection);
    const feeds = await query("SELECT * FROM feedback WHERE id = ?", [id]);
    return feeds;
  }

  async function createFeed(feedObj) {
    const query = util.promisify(connection.query).bind(connection);
    await query("insert into feedback set ? ", [feedObj]);
  }

  async function deleteFeedback(id) {
    const query = util.promisify(connection.query).bind(connection);
    await query("delete from feedback  where id =?", [id]);
  }

  async function showfeeds() {
    const query = util.promisify(connection.query).bind(connection);
    return await query("select * from feedback");
  }


module.exports = {getFeedById, deleteFeedback, createFeed, showfeeds}