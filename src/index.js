const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'awesome-web-app' });
});

module.exports = app;
