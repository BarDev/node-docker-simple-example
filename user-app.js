//https://github.com/FaztWeb/express-react-api-example/blob/master/server.js
const express = require('express');
const AWS = require("aws-sdk");
const app = express();

var hostname = "--EMPTY--"
var meta  = new AWS.MetadataService();
meta.request("/latest/meta-data/instance-id", function(err, data){
    hostname = data;
});

app.use(express.static(__dirname + '/public'));

app.get('/api/user', (req, res) => {
    res.json(
        {
            djfkdsj: "fdsfs",
            hostname: hostname,
            name: "user",
            process: process.env
        }
    )
});

app.listen(3000, function () {
    console.log('user: server on port 3000');
});