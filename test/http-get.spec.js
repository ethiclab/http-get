const get = require("../src/http-get")
global.XMLHttpRequest = require("xmlhttprequest-ssl").XMLHttpRequest;

get("https://www.google.com")
  .then(function (res) {
    console.log("ok")
  })
  .catch(function (err, desc) {
    console.log(err, desc)
    console.log("ko")
  })