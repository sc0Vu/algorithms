var tape = require('tape')
var fs = require('fs-extra')
var path = require('path')
// var target = [44,66,1,34,56]
var sorted = [1,34,44,56,66]

tape('Test utils', (t) => {
  var utils = require('./utils')()

  t.test('swap variable a b', (st) => {
    var a = 1
    var b = 2
    var res = utils.swap(a, b)

    a = res[0]
    b = res[1]

    st.equals(a, 2)
    st.equals(b, 1)
    st.end()
  })

  t.test('swap array a[0] a[1]', (st) => {
    var a = [1, 2]

    a = utils.swap(a[0], a[1])
    st.equals(a[0], 2)
    st.equals(a[1], 1)
    st.end()
  })
})

tape('Test insertion sort', (t) => {
  var insertionSort = require('./insertionsort')

  t.test('sort [44,66,1,34,56]', (st) => {
    var ans = insertionSort([44,66,1,34,56])

    st.deepEquals(ans, sorted)
    st.end()
  })

  t.test('sort [2,1,3,1,2]', (st) => {
    var ans = insertionSort([2, 1, 3, 1, 2])

    st.deepEquals(ans, [1, 1, 2, 2, 3])
    st.end()
  })
})

tape('Test bubble sort', (t) => {
  var bubbleSort = require('./bubblesort')

  t.test('sort [44,66,1,34,56]', (st) => {
    var ans = bubbleSort([44,66,1,34,56])

    st.deepEquals(ans, sorted)
    st.end()
  })

  t.test('sort [2,1,3,1,2]', (st) => {
    var ans = bubbleSort([2, 1, 3, 1, 2])

    st.deepEquals(ans, [1, 1, 2, 2, 3])
    st.end()
  })
})

tape('Test merge sort', (t) => {
  var mergeSort = require('./mergesort')

  t.test('sort [44,66,1,34,56]', (st) => {
    var ans = mergeSort([44,66,1,34,56])

    st.deepEquals(ans, sorted)
    st.end()
  })

  t.test('sort [2,1,3,1,2]', (st) => {
    var ans = mergeSort([2, 1, 3, 1, 2])

    st.deepEquals(ans, [1, 1, 2, 2, 3])
    st.end()
  })
})

tape('Test quick sort', (t) => {
  var quickSort = require('./quicksort')

  t.test('sort [44,66,1,34,56]', (st) => {
    var ans = quickSort([44,66,1,34,56])

    st.deepEquals(ans, sorted)
    st.end()
  })

  t.test('sort [2,1,3,1,2]', (st) => {
    var ans = quickSort([2, 1, 3, 1, 2])

    st.deepEquals(ans, [1, 1, 2, 2, 3])
    st.end()
  })
})

// we should change string to number
// if we don't change type
// the test will always fail
tape('Test quick sort count', async (t) => {
  var contentBuffer = await fs.readFile(path.join(__dirname, 'quickSort.txt'))
  var quick = require('./quicksortcount')

  t.test('sort count quickSort.txt, pivot is left', (st) => {
    // due to the target will sort after quick sort
    // so we need to reload target each test
    var target = contentBuffer.toString().split('\n').map((number) => {
      return parseInt(number, 10)
    })
    var leftQuick = new quick(0)

    st.equals(leftQuick.count, 0)

    leftQuick.quickSort(target, 0, target.length-1)

    st.equals(leftQuick.count, 162085)
    st.end()
  })

  t.test('sort count quickSort.txt, pivot is right', (st) => {
    // due to the target will sort after quick sort
    // so we need to reload target each test
    var target = contentBuffer.toString().split('\n').map((number) => {
      return parseInt(number, 10)
    })
    var rightQuick = new quick(1)

    st.equals(rightQuick.count, 0)

    rightQuick.quickSort(target, 0, target.length-1)

    st.equals(rightQuick.count, 164123)
    st.end()
  })

  t.test('sort count quickSort.txt, pivot is median of median', (st) => {
    // due to the target will sort after quick sort
    // so we need to reload target each test
    var target = contentBuffer.toString().split('\n').map((number) => {
      return parseInt(number, 10)
    })
    var medianQuick = new quick(2)

    st.equals(medianQuick.count, 0)

    medianQuick.quickSort(target, 0, target.length-1)

    st.equals(medianQuick.count, 138382)
    st.end()
  })
})

tape('Test count inversions', (t) => {
  var countInversions = require('./countinversions')

  t.test('count inversions [44,66,1,34,56]', (st) => {
    var ans = countInversions([44,66,1,34,56])

    st.equals(ans , 5)
    st.end()
  })

  t.test('count inversions [2,4,1,3,5]', (st) => {
    var ans = countInversions([2, 4, 1, 3, 5])

    st.equals(ans, 3)
    st.end()
  })

  t.test('count inversions [2,1,3,1,2]', (st) => {
    var ans = countInversions([2, 1, 3, 1, 2])

    st.equals(ans, 4)
    st.end()
  })

  // it will take long time to execute
  // we should change string to number
  // if we don't change type
  // the test will always fail
  // t.test('integerArray.txt', async (st) => {
  //   try {
  //     var contentBuffer = await fs.readFile(path.join(__dirname, 'integerArray.txt'))
  //     var target = contentBuffer.toString().split('\n').map((number) => {
  //       return parseInt(number, 10)
  //     })

  //     st.equals(countInversions(target), 2407905288)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  //   st.end()
  // })
})

tape('Test count inversions by merge', (t) => {
  var countInversions = require('./countInversionsbymerge')

  t.test('count inversions [44,66,1,34,56]', (st) => {
    var ans = countInversions([44,66,1,34,56])

    st.equals(ans , 5)
    st.end()
  })

  t.test('count inversions [2,4,1,3,5]', (st) => {
    var ans = countInversions([2, 4, 1, 3, 5])

    st.equals(ans, 3)
    st.end()
  })

  t.test('count inversions [2,1,3,1,2]', (st) => {
    var ans = countInversions([2, 1, 3, 1, 2])

    st.equals(ans, 4)
    st.end()
  })

  // we should change string to number
  // if we don't change type
  // the test will always fail
  t.test('integerArray.txt', async (st) => {
    try {
      var contentBuffer = await fs.readFile(path.join(__dirname, 'integerArray.txt'))
      var target = contentBuffer.toString().split('\n').map((number) => {
        return parseInt(number, 10)
      })

      st.equals(countInversions(target), 2407905288)
    } catch (error) {
      console.log(error.message)
    }
    st.end()
  })
})

tape('Test randomized select', (t) => {
  var randomizedSelect = require('./randomizedSelect')

  t.test('randomized select [14, 11, 25, 17, 17, 14, 14, 3, 19, 12] 0', (st) => {
    var ans = randomizedSelect([14, 11, 25, 17, 17, 14, 14, 3, 19, 12], 0)

    st.equals(ans, 3)
    st.end()
  })

  t.test('randomized select [4, 1, 4, 9, 22, 25, 10, 19, 6, 23] 8', (st) => {
    var ans = randomizedSelect([4, 1, 4, 9, 22, 25, 10, 19, 6, 23], 8)

    st.equals(ans, 23)
    st.end()
  })

  t.test('randomized select [16, 6, 9, 20, 15, 21, 5, 21, 6, 26] 9', (st) => {
    var ans = randomizedSelect([16, 6, 9, 20, 15, 21, 5, 21, 6, 26], 9)

    st.equals(ans, 26)
    st.end()
  })
})