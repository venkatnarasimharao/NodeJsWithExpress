
require('dotenv').config();

const Configrations = {
    server : {
        port : process.env.PORT,
        host : process.env.HOST
    }
}

module.exports = Configrations