module.exports = exports = function (number, base) {
  var bignumber = {}

  bignumber.number = new String(number)
  bignumber.base = base

  bignumber.add = function (number) {
    var tmp = new String(number)
    var a = ''
    var b = ''
    var ans = []
    var carry = 0
    var digit = 0
    var base = this.base

    if (this.number.length >= tmp.length) {
      a = this.number
      b = tmp
    } else {
      a = tmp
      b = this.number
    }
    var bLength = b.length-1
    var digit = 0
    var carry = 0

    for (var i=a.length-1; i>=0; i--) {
      if (bLength >= 0) {
        digit = parseInt(a[i], base) + parseInt(b[bLength], base) + carry
        bLength -= 1
      } else {
        digit = parseInt(a[i], base) + carry
      }
      carry = Math.floor(digit / base)
      digit %= base
      ans[i + 1] = digit
    }
    if (ans[0] === undefined) {
      if (carry > 0) {
        ans[0] = carry
      }
    }
    return ans.join('')
  }

  return bignumber
}