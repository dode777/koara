const express = require('express');
const globalRouter = express.Router();

const { sendSuccessMessage } = require('../controller/globalController');

globalRouter.get('/', sendSuccessMessage);

module.exports = globalRouter;
