const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = require('../config.js').massive;
const controller = require('./controller');
const app = express();
const port = 3001;
//massive
massive(connectionString)
  .then(dbInstance => app.set('db', dbInstance))
  .catch(console.log());
//middlewares
app.use(json());
app.use(cors());

//endpoints

app.get('/api/test', controller.getAllUsers);

//
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
