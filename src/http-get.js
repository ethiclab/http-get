(function() {
  const f = function(url, options) {
    return new Promise(function (resolve, reject) {
      const request = new XMLHttpRequest()
      request.open('GET', url, true)
      request.onload = function() {
        resolve(request.responseText)
      }
      request.onerror = function() {
        reject(request.status, request.statusText)
      }
      if (options) {
        if (options.accept) {
          request.setRequestHeader('accept', options.accept)
        }
      }
      request.send()
    })
  }
  module.exports = f
})()
