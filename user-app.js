//https://github.com/FaztWeb/express-react-api-example/blob/master/server.js

var os = require('os');
const express = require('express');
const app = express();

var hostname = os.hostname();

app.use(express.static(__dirname + '/public'));

app.get('/api/user', (req, res) => {
    res.json(
        {
            hostname: hostname,
            name: "user",
            process: process.env
        })
});

app.listen(3000, function () {
    console.log('user: server on port 3000');
});