# http-get

    npm install @ethiclab/http-get

# usage

```javascript
const get = require("../src/http-get")
global.XMLHttpRequest = require("xmlhttprequest-ssl").XMLHttpRequest;

get("https://www.google.com")
  .then(function (res) {
    console.log(res)
  })
  .catch(function (err, desc) {
    console.log(err, desc)
  })
```
