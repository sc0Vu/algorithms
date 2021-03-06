module.exports = exports = function (number, base) {
  var bignumber = {}

  bignumber.number = new String(number)
  bignumber.base = base
  bignumber.max = new String(Number.MAX_SAFE_INTEGER)

  bignumber.swap = function (a, b) {
    var tmp = a
    a = b
    b = tmp
  }

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

    for (var i=a.length-1; i>=0; i--) {
      if (bLength >= 0) {
        digit = parseInt(a[i], base) + parseInt(b[bLength], base) + carry
        bLength -= 1
      } else {
        digit = parseInt(a[i], base) + carry
      }
      carry = Math.floor(digit / base) || 0
      digit %= base
      ans[i + 1] = digit
    }
    if (ans[0] === undefined && carry > 0) {
      ans[0] = carry
    }
    return ans.join('')
  }

  bignumber.mul = function (number) {
    var tmp = new String(number)
    var a = ''
    var b = ''
    var ans = []
    var carry = []
    var digit = 0
    var x = 0
    var y = 0
    var base = this.base

    if (this.number.length >= tmp.length) {
      a = this.number
      b = tmp
    } else {
      a = tmp
      b = this.number
    }
    for (var i=a.length+b.length-1; i>=0; i--) {
      carry[i] = 0
      ans[i] = 0
    }
    
    for (var i=a.length-1; i>=0; i--) {
      for (var j=b.length-1; j>=0; j--) {
        digit = parseInt(a[i], base) * parseInt(b[j], base)
        carry[i + j + 1] += digit % base
        carry[i + j] += Math.floor(digit / base)
      }
    }
    for (var i=carry.length-1; i>=0; i--) {
      y = carry[i] + x
      digit = y % base
      x = Math.floor(y / base)
      ans[i] = digit
    }
    if (ans[0] === 0) {
      ans[0] = null
    }
    return ans.join('')
    // var limit = Math.floor(this.max.length / 2)

    // if (this.number.length < limit && tmp.length < limit) {
    //   return parseInt(this.number, this.base) * parseInt(tmp, this.base)
    // }
    // return this.karatsuba(this.number, tmp)
  }

  /**
   * karatsuba
   * use this will cause int overflow
   */
  bignumber.karatsuba = function (numbera, numberb) {
    if (typeof numbera !== 'string') {
      numbera = numbera.toString()
    }
    if (typeof numberb !== 'string') {
      numberb = numberb.toString()
    }
    if (numbera.length < 2 && numberb.length < 2) {
      return numbera * numberb
    }
    // karatsuba algorithm
    var maxLength = Math.max(numbera.length, numberb.length)
    var pivot = Math.floor(maxLength / 2)

    // split digit
    var higha = numbera.substr(0, pivot)
    var lowa = numbera.substr(pivot)
    var highb = numberb.substr(0, pivot)
    var lowb = numberb.substr(pivot)

    var z0 = this.karatsuba(lowa, lowb)
    var z1 = this.karatsuba((parseInt(lowa , this.base)+ parseInt(higha, this.base)), (parseInt(lowb , this.base)+ parseInt(highb, this.base)))
    var z2 = this.karatsuba(higha, highb)
    return (Math.pow(z2 * 10, 2 * pivot)) + (Math.pow((z1 - z2 - z0) * 10, pivot)) + z0
  }

  return bignumber
}