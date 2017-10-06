var tape = require('tape')
var target = [44,66,1,34,56]
var sorted = [1,34,44,56,66]

tape('Test merge sort', (t) => {
  var mergeSort = require('./mergesort')

  t.test('sort [44,66,1,34,56]', (st) => {
    var ans = mergeSort(target)
    st.deepEquals(ans, sorted)
    st.end()
  })
})

tape('Test insertion sort', (t) => {
  var insertionSort = require('./insertionsort')

  t.test('sort [44,66,1,34,56]', (st) => {
    var ans = insertionSort(target)
    st.deepEquals(ans, sorted)
    st.end()
  })
})