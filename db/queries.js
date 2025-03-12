const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function getUsernamesWhere(whereValue) {
    const { rows } = await pool.query("SELECT * FROM usernames WHERE LOWER(username) LIKE LOWER($1)", [`%${whereValue}%`]);
    return rows;
  }

async function insertUsername(username) {
  await pool.query("INSERT INTO top_users (username) VALUES ($1)", [username]);
}

module.exports = {
    getAllUsernames,
    getUsernamesWhere,
    insertUsername
}