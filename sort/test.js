var tape = require('tape')
var fs = require('fs-extra')
var path = require('path')
var target = [44,66,1,34,56]
var sorted = [1,34,44,56,66]

tape('Test insertion sort', (t) => {
  var insertionSort = require('./insertionsort')

  t.test('sort [44,66,1,34,56]', (st) => {
    var ans = insertionSort(target)
    st.deepEquals(ans, sorted)
    st.end()
  })
})

tape('Test bubble sort', (t) => {
  var bubbleSort = require('./bubblesort')

  t.test('sort [44,66,1,34,56]', (st) => {
    var ans = bubbleSort(target)
    st.deepEquals(ans, sorted)
    st.end()
  })
})

tape('Test merge sort', (t) => {
  var mergeSort = require('./mergesort')

  t.test('sort [44,66,1,34,56]', (st) => {
    var ans = mergeSort(target)
    st.deepEquals(ans, sorted)
    st.end()
  })
})

tape('Test quick sort', (t) => {
  var quickSort = require('./quicksort')

  t.test('sort [44,66,1,34,56]', (st) => {
    var ans = quickSort(target)
    st.deepEquals(ans, sorted)
    st.end()
  })
})

tape('Test count inversions', (t) => {
  var countInversions = require('./countinversions')

  t.test('count inversions [44,66,1,34,56]', (st) => {
    var ans = countInversions(target)
    st.equals(ans , 0)
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
  // t.test('integerArray.txt', async (st) => {
  //   try {
  //     var contentBuffer = await fs.readFile(path.join(__dirname, 'integerArray.txt'))
  //     var target = contentBuffer.toString().split('\n')
  //     st.equals(countInversions(target), 2407905288)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  //   st.end()
  // })
})

tape('Test count inversions by merge', (t) => {
  var countInversions = require('./countinversionsbymerge')

  t.test('count inversions [44,66,1,34,56]', (st) => {
    var ans = countInversions(target)
    st.equals(ans , 0)
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

  t.test('integerArray.txt', async (st) => {
    try {
      var contentBuffer = await fs.readFile(path.join(__dirname, 'integerArray.txt'))
      var target = contentBuffer.toString().split('\n')
      st.equals(countInversions(target), 2407905288)
    } catch (error) {
      console.log(error.message)
    }
    st.end()
  })
})
