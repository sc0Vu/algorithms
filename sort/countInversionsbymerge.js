module.exports = exports = function (target) {
  mergeCount = function (data, leftPart, rightPart) {
    var count = 0
    var leftIndex = 0
    var rightIndex = 0

    for (var i=data.length; i>0; i--) {
      if (leftIndex === leftPart.length) {
        data[leftIndex + rightIndex] = rightPart[rightIndex]
        rightIndex += 1
      } else if (rightIndex === rightPart.length) {
        data[leftIndex + rightIndex] = leftPart[leftIndex]
        leftIndex += 1
      } else if (leftPart[leftIndex] > rightPart[rightIndex]) {
        data[leftIndex + rightIndex] = rightPart[rightIndex]
        rightIndex += 1
        count += leftPart.length - leftIndex
      } else {
        data[leftIndex + rightIndex] = leftPart[leftIndex]
        leftIndex += 1
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