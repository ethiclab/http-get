# http-get [![npm version](https://badge.fury.io/js/%40ethiclab%2Fhttp-get.svg)](https://badge.fury.io/js/%40ethiclab%2Fhttp-get) [![Build Status](https://travis-ci.com/ethiclab/http-get.svg?branch=master)](https://travis-ci.com/ethiclab/http-get) [![codecov](https://codecov.io/gh/ethiclab/http-get/branch/master/graph/badge.svg)](https://codecov.io/gh/ethiclab/http-get)

    npm install @ethiclab/http-get

# usage

```javascript
const get = require("@ethiclab/http-get")
global.XMLHttpRequest = require("@ethiclab/xmlhttprequest").XMLHttpRequest

get("https://www.google.com")
  .then(function (res) {
    console.log(res)
  })
  .catch(function (err, desc) {
    console.log(err, desc)
  })
```
