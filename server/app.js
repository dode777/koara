const express = require('express');
const app = express();
require('dotenv').config();

const globalRouter = require('./router/globalRouter');

const PORT = process.env.PORT;

app.use('/', globalRouter);

app.listen(PORT, () => {
  console.log(`😀 Listening on: http://localhost:${PORT}`);
});
