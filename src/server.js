const express = require('express')
const config = require('./config/config')
const app = express();
const port = config.server.port
const routes = require('./routes')
var cors = require("cors");


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

// connection btw two different ports
app.use(cors());

app.use(routes)

app.listen(port,() => {
    console.log(`server started with port no ${port} , ${app}`);
});