var tape = require('tape');
var Bignumber = require('./bignumber')

tape('Test add function', function (t) {
  var a = new Bignumber(1234567, 10)

  t.test('1234567 + 1234567', function (st) {
    var ans = a.add(1234567)

    st.equal(ans, '2469134')
    st.end()
  })

  t.test('1234567 + 11234567', function (st) {
    var ans = a.add(11234567)

    st.equal(ans, '12469134')
    st.end()
  })

  t.test('1234567 + 9999999', function (st) {
    var ans = a.add(9999999)

    st.equal(ans, '11234566')
    st.end()
  })

  t.test('1234567 + 99999999', function (st) {
    var ans = a.add(99999999)

    st.equal(ans, '101234566')
    st.end()
  })
})

tape('Test mul function', function (t) {
  var a = new Bignumber(1234567, 10)

  t.test('1234567 * 99999999', function (st) {
    var ans = a.mul(99999999)

    st.equal(ans, '123456698765433')
    st.end()
  })

  var b = new Bignumber('3141592653589793238462643383279502884197169399375105820974944592', 10)

  t.test('3141592653589793238462643383279502884197169399375105820974944592 * 2718281828459045235360287471352662497757247093699959574966967627', function (st) {
    var ans = b.mul('2718281828459045235360287471352662497757247093699959574966967627')

    st.equal(ans, '8539734222673567065463550869546574495034888535765114961879601127067743044893204848617875072216249073013374895871952806582723184')
    st.end()
  })
})
