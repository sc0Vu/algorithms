var tape = require('tape')
var target = [44,66,1,34,56]
var sorted = [1,34,44,56,66]

tape('Test merge sort', (t) => {
  var mergesort = require('./mergesort')

  t.test('sort [44,66,1,34,56]', (st) => {
    var ans = mergesort(target)
    st.deepEquals(ans, sorted)
    st.end()
  })
})