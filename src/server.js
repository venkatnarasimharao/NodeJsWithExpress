const express = require('express')
const config = require('./config/config')
const app = express();
const port = config.server.port


app.listen(port,() => {
    console.log(`server started with port no ${port}`);
});