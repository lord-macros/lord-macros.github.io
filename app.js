const express = require("express");
//const { dirname } = require("path");
const path = require("path");
//const req = require("express/lib/request");
//const res = require("express/lib/response");

const app = express();

app.use(express.static('static'))

app.get("/",(req, res)=> {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, ()=> {
    console.log("server running on port", 3000);
});