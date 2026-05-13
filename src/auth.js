const bcrypt = require('bcrypt');

async function login(username, password) {
  // TODO: fetch user from DB
  const hash = await bcrypt.hash(password, 10);
  return { username, token: hash };
}

module.exports = { login };
