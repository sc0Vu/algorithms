var assert = require('assert')
var Bignumber = require('./bignumber')

// test add
var a = new Bignumber(1234567, 10)
var ans = a.add(1234567)

assert.equal(ans, 2469134, '1234567 + 1234567 must equal 2469134')

var ans = a.add(11234567)

assert.equal(ans, 12469134, '1234567 + 11234567 must equal 12469134')

var ans = a.add(9999999)

assert.equal(ans, 11234566, '1234567 + 9999999 must equal 11234566')

var ans = a.add(99999999)

assert.equal(ans, 101234566, '1234567 + 9999999 must equal 101234566')

// test mul
var ans = a.mul(1234567)

assert.equal(ans, 1524155677489, '1234567 * 1234567 must equal 1524155677489')

var b = new Bignumber(123456789)
