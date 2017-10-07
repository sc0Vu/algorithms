module.exports = exports = function (target) {
  countInversions = function (data) {
  	// it's n^2 method
    var count = 0
    var length = data.length

    for (var i=0; i<length; i++) {
      for (var j=i+1; j<length; j++) {
        if (data[i] > data[j]) {
          count += 1
        }
      }
    }
    return count
  }

  return countInversions(target)
}