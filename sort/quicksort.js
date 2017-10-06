var utils = require('./utils')()

module.exports = exports = function (target) {
  var partition = function (data, low, high) {
    var pivot = Math.floor((low+high) / 2)
    var i = low-1

    for (var j=low; j<high; j++) {
      if (data[j] < data[pivot]) {
        i += 1
        utils.swap(data[i], data[j])
      }
    }
    utils.swap(data[i+1], data[pivot])
    return i + 1
  }

  var quickSort = function (data, low, high) {
    if (low < high) {
      pivot = partition(data, low, high)

      quickSort(data, low, pivot-1)
      quickSort(data, pivot+1, high)
      return data
    }
  }

  return quickSort(target, 0, target.length)
}