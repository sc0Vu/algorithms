var tape = require('tape')
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

    var ans = countInversions([2, 4, 1, 3, 5])
    st.equals(ans, 3)
    st.end()
  })
})