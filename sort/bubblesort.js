module.exports = exports = function (target) {
  var swap = function (a, b) {
    var tmp = a
    a = b
    b = a
  }

  var bubbleSort = function (data) {
    var length = data.length

    for (var i=0; i<length; i++) {
      for (var j=0; j<length-i; j++) {
        if (data[j] > data[j+1]) {
          this.swap(data[j], data[j+1])
        }
      }
    }
    return data
  }

  return bubbleSort(target)
}