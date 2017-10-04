module.exports = exports = function (target) {
  function merge(leftData, rightData) {
    var sortedData = []
    var leftIndex = 0
    var rightIndex = 0

    for (var i=0; i<leftData.length + rightData.length; i++) {
      if (leftIndex === leftData.length) {
        sortedData.push(rightData[rightIndex])
        rightIndex += 1
      } else if (rightIndex === rightData.length) {
        sortedData.push(leftData[leftIndex])
        leftIndex += 1
      } else if (leftData[leftIndex] < rightData[rightIndex]) {
        sortedData.push(leftData[leftIndex])
        leftIndex += 1
      } else {
        sortedData.push(rightData[rightIndex])
        rightIndex += 1
      }
    }
    return sortedData
  }

  function mergeSort (data) {
    if (data.length === 1) {
      return data
    }
    var pivot = Math.floor(data.length / 2)
    var leftPartial = []
    var rightPartial = []

    leftPartial = data.slice(0, pivot)
    rightPartial = data.slice(pivot, data.length)

    // using var to avoid js scope chain
    var leftData = mergeSort(leftPartial)
    var rightData = mergeSort(rightPartial)
    return merge(leftData, rightData)
  }

  return mergeSort(target)
}