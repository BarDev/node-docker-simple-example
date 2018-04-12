//https://github.com/FaztWeb/express-react-api-example/blob/master/server.js

var os = require('os');
const express = require('express');
const app = express();

var hostname = os.hostname();

app.use(express.static(__dirname + '/public'));

app.get('/api/scheduler', (req, res) => {
    res.json(
        {
            hostname: hostname,
            name: "scheduler",
            process: process.env
        })
});

app.listen(3000, function () {
    console.log('scheduler: server on port 3000');
});