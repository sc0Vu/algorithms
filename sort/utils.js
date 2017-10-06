module.exports = exports = function () {
  var utils = {}

  utils.swap = function (a, b) {
    var tmp = a
    a = b
    b = a
  }

  return utils
}