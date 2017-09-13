var assert = require('assert')
var Bignumber = require('./bignumber')

var a = new Bignumber(1234567, 10)
var ans = a.add(1234567)

assert.equal(ans, 2469134, '1234567 + 1234567 must equal 2469134')