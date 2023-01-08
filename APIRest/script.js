//modules
var express = require("express");
var bodyParser = require("body-parser");
var DAOList = require("./APIRest");

var app = express();
app.use(bodyParser.json());

app.get("/list", function(request, response)
{
    var name = request.body.name;
    var result = DAOList.createList(name)

    response.status(200);
    response.json(result);
    response.end();
})

app.listen(8080);