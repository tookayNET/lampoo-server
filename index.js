'use strict';

require("dotenv").config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3123;

const router = require('./routes/routes');

app.use(router);

app.listen(PORT, () => {
  console.log(`Lampoo server listening on localhost:${PORT}`);
});