(function() {
  const f = function(url, options) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest()
      request.open('GET', url, true)
      request.onload = () => resolve(request.responseText)
      request.onerror = () => reject(request.status, request.statusText)
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
