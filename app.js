
const express = require("express");
const bodyParser = require("body-parser");
var Request = require("request");
var app = express();

app.set("port", (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(app.get("port"), () => {
    console.log("Listo puerto 3000");
});
var credenciales = {
    username: "restapiuser@16918821618",
    password: "ydsRK9grZi9M"
};
var headers = {
    "Content-Type": 'application/json',
    "Accept": 'application/json',
    "Access-Control-Allow-Headers": "Content-Type"
};

var URLu = "https://api.sandbox.hyperwallet.com/rest/v3/users";

app.post("/usuario", (req, res) => {
    var rpta = {};
    var data = req.body;
    Request.post({
        "headers": headers,
        "auth": credenciales,
        "url": URLu,
        //json: true,
        "body": JSON.stringify(data)
    }, (error, response, body) => {
        if (error) {
            res.send(error);
        }
        res.send(JSON.parse(body));
    })
});

app.get("/usuario", (req, res) => {
    Request.get({
        "headers": headers,
        "auth": credenciales,
        "url": URLu
    }, (error, response, body) => {
        if (error) {
            res.send(error);
        }
        res.send(JSON.parse(body));
    })
})