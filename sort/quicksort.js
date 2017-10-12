var utils = require('./utils')()

module.exports = exports = function (target) {
  var partition = function (data, pivot, left, right) {
    var tmp = data[pivot]
    var i = left-1
    var res = []

    for (var j=left; j<right; j++) {
      if (data[j] < tmp) {
        i += 1
        res = utils.swap(data[i], data[j])
        data[i] = res[0]
        data[j] = res[1]
      }
    }
    i += 1
    res = utils.swap(data[i], data[right])
    data[i] = res[0]
    data[right] = res[1]
    return i
  }

  var quickSort = function (data, left, right) {
    if (left < right) {
      // var pivot = Math.floor((left+right) / 2)
      var pivot = right
      var index = partition(data, pivot, left, right)

      quickSort(data, left, index-1)
      quickSort(data, index+1, right)
      return data
    }
  }

  return quickSort(target, 0, target.length-1)
}