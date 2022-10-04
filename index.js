// var http = require("http");

// // create a server object
// http
//   .createServer(function (req, res) {
//     res.write("Hello world!");
//     res.end();
//   })
//   .listen(8085);

//Server Express
// const express = require("express");
// const req = require("express/lib/request");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.listen(8085);

//Server Express cu continut static
const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(8085);
