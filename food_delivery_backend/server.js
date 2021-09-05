const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');
require('dotenv').config();
const routes = require('./Routes/routes')
const app = express();

//Server Configs
const PORT = process.env.PORT
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.listen(PORT, () => {
    console.log(`App running on Port ${PORT}`)
})

//Routes
routes(app);