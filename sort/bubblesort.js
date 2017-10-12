var utils = require('./utils')()

module.exports = exports = function (target) {
  var bubbleSort = function (data) {
    var length = data.length
    var res = []

    for (var i=0; i<length; i++) {
      for (var j=0; j<length-i; j++) {
        if (data[j] > data[j+1]) {
          res = utils.swap(data[j], data[j+1])
          data[j] = res[0]
          data[j+1] = res[1]
        }
      }
    }
    return data
  }

  return bubbleSort(target)
}