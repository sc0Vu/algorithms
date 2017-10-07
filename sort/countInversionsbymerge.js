module.exports = exports = function (target) {
  mergeCount = function (data, leftPart, rightPart) {
    var count = 0
    var leftIndex = 0
    var rightIndex = 0

    while (leftPart.length > 0 && rightPart.length > 0) {
      if (leftPart[0] > rightPart[0]) {
        count += leftPart.length
        rightPart.shift()
      } else {
        leftPart.shift()
      }
    }
    return count
  }

  countInversionsByMerge = function (data) {
    // it's nlogn method
    if (data.length < 2) {
      return 0
    }
    var count = 0
    var pivot = Math.floor(data.length / 2)
    var leftPart = data.slice(0, pivot)
    var rightPart = data.slice(pivot, data.length)

    count = countInversionsByMerge(leftPart)
    count += countInversionsByMerge(rightPart)
    count += mergeCount(data, leftPart, rightPart)
    return count
  }

  return countInversionsByMerge(target)
}