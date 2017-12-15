const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const connectionString = require('../config.js').massive;
const secret = require('../config.js').session;
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
app.use(
  session({
    secret: session.secret,
    saveUninitialized: false,
    resave: false
  })
);
//endpoints

app.get('/api/test', controller.getAllUsers);
app.post('/user', controller.createUser);

//
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
