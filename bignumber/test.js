var tape = require('tape');
var Bignumber = require('./bignumber')

tape('Test add function', function (t) {
  var a = new Bignumber(1234567, 10)

  t.test('1234567 + 1234567', function (st) {
    var ans = a.add(1234567)

    st.equal(ans, 2469134)
    st.end()
  })

  t.test('1234567 + 11234567', function (st) {
    var ans = a.add(11234567)

    st.equal(ans, 12469134)
    st.end()
  })

  t.test('1234567 + 9999999', function (st) {
    var ans = a.add(9999999)

    st.equal(ans, 11234566)
    st.end()
  })

  t.test('1234567 + 99999999', function (st) {
    var ans = a.add(99999999)

    st.equal(ans, 101234566)
    st.end()
  })
})

tape('Test mul function', function (t) {
  var a = new Bignumber(1234567, 10)

  t.test('1234567 * 99999999', function (st) {
    var ans = a.mul(1234567)

    st.equal(ans, 123456789)
    st.end()
  })
})
