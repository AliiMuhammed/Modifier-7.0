const util = require("util");
const {connection} = require('../DB/dbConnection');


  async function getMemberById(id) {
    const query = util.promisify(connection.query).bind(connection);
    const members = await query("SELECT * FROM aboutUs WHERE id = ?", [id]);
    return members;
  }

  async function updateMember(id, memberObj) {
    const query = util.promisify(connection.query).bind(connection);
    await query("UPDATE aboutUs SET ? WHERE id = ?", [memberObj, id]);
  }

  async function createMember(memberObj) {
    const query = util.promisify(connection.query).bind(connection);
    await query("insert into aboutUs set ? ", [memberObj]);
  }

  async function deleteMember(id) {
    const query = util.promisify(connection.query).bind(connection);
    await query("delete from aboutUs  where id =?", [id]);
  }

  async function showmembers() {
    const query = util.promisify(connection.query).bind(connection);
    return await query("select * from aboutUs");
  }

module.exports = {getMemberById, updateMember, deleteMember, createMember, showmembers}