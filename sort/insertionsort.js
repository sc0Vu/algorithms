module.exports = exports = function (target) {
  var insertionSort = function (data) {
    var length = data.length

    for (var i=1; i<length; i++) {
      var tmp = data[i]

      for (var j=i-1; j>=0 && ans[j]>tmp; j--) {
        ans[j + 1] = data[j]
      }
      data[j + 1] = tmp
    }
    return data
  }

  return insertionSort(target)
}