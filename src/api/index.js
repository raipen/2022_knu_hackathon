const { Router } = require('express');

const app = Router();
app.use('/hackathon/',require('./hackathon'));

module.exports = app;