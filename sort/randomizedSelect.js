var utils = require('./utils')()

module.exports = exports = function (target, index) {
  var partition = function (data, pivot, left, right) {
    var tmp = data[pivot]
    var i = left-1

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

  var randomizedSelect = function (data, left, right, index) {
    if (data.length === 1) {
      return data[0]
    }
    if (left < right) {
      // var pivot = Math.floor((left+right) / 2)
      var pivot = right
      var pivotIndex = partition(data, pivot, left, right)

      if (pivotIndex === index) {
        return data[pivotIndex]
      }
      
      var select = randomizedSelect(data, left, pivotIndex-1, index)

      if (select > 0) {
        return select
      } else {
        return randomizedSelect(data, pivotIndex+1, right, index)
      }
    }
  }
  return randomizedSelect(target, 0, target.length-1, index)
}