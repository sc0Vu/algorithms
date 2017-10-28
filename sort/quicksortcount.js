var utils = require('./utils')()

module.exports = exports = function (pivotType) {
  var quick = {}

  quick.count = 0

  quick.pivotType = pivotType || 0

  quick.partition = function (data, pivot, left, right) {
    var tmp = data[pivot]
    var i = left+1
    var res = []

    if (this.pivotType !== 0) {
      data[pivot] = data[left]
      data[left] = tmp
    }

    for (var j=i; j<=right; j++) {
      if (data[j] < tmp) {
        res = utils.swap(data[i], data[j])
        data[i] = res[0]
        data[j] = res[1]
        i += 1
      }
    }
    i -= 1
    res = utils.swap(data[i], data[left])
    data[i] = res[0]
    data[left] = res[1]
    return i
  }

  quick.quickSort = function (data, left, right) {
    if (left < right) {
      this.count += (right-left)

      switch (this.pivotType) {
        case 0:
        var pivot = left
        break
        case 1:
        var pivot = right
        break
        case 2:
        var length = right-left+1
        var middle = 0

        if (length%2 === 0) {
          middle = left+(length/2)-1
        } else {
          middle = left+Math.floor(length/2)
        }
        var comp = [
          data[left], data[middle], data[right]
        ].sort((a, b) => {
          return a - b
        })

        if (comp[1] === data[left]) {
          var pivot = left
        } else if (comp[1] === data[middle]) {
          var pivot = middle
        } else {
          var pivot = right
        }
        break;
        default:
        var pivot = left
        break
      }
      var index = this.partition(data, pivot, left, right)

      this.quickSort(data, left, index-1)
      this.quickSort(data, index+1, right)
      return data
    }
  }

  return quick
}