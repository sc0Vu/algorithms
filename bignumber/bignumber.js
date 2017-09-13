module.exports = exports = function (number, base) {
  var bignumber = {}

  bignumber.number = new String(number)
  bignumber.base = base

  bignumber.add = function (number) {
    var a = this.number
    var b = new String(number)
    var ans = []
    var carry = 0
    var digit = 0
    var base = this.base

    if (a.length > b.length) {
      var bLength = b.length-1

      for (var i=a.length-1; i>=0; i--) {
        if (bLength >= 0) {
          var digit = parseInt(a[i], base) + parseInt(b[bLength], base) + carry
          var carry = Math.floor(digit / base)

          digit %= base
          bLength -= 1
        } else {
          carry = 0
        }
        ans[i + 1] = digit
      }
    } else {
      var aLength = a.length-1

      for (var i=b.length-1; i>=0; i--) {
        if (aLength >= 0) {
          var digit = parseInt(b[i], base) + parseInt(a[aLength], base) + carry
          var carry = Math.floor(digit / base)

          digit %= base
          aLength -= 1
        } else {
          carry = 0
        }
        ans[i + 1] = digit
      }
    }
    if (carry > 0) {
      ans[0] = carry
    }
    return ans.join('')
  }

  return bignumber
}