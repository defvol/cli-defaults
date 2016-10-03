var fs = require('fs')
var path = require('path')

module.exports = CLI

function CLI (answers) {
  if (!(this instanceof CLI)) return new CLI(answers)

  const defaults = {
    help: () => console.log(this.usage()),
    version: () => console.log(this.version())
  }

  this.answers = Object.assign({}, defaults, answers)
  return this
}

/**
 * Reply to each parameter
 * @param {object} params is a set of options passed to the cli
 * SEE the 'minimist' module docs
 */
CLI.prototype.answer = function (params) {
  for (var p in params) {
    var reply = this.answers[p]
    var value = params[p]
    reply ? reply(value) : null
  }
}

/**
 * Get usage instructions
 * @return {string} the instructions to run this thing
 */
CLI.prototype.usage = function () {
  var u = []
  u.push('Any cli tool should provide these options')
  u.push('usage: cli-defaults [options]')
  u.push('')
  u.push(' --help prints this message')
  u.push(' --version prints package version')
  u.push('')
  return u.join('\n')
}

/**
 * Get module version from the package.json file
 * @return {string} version number
 */
CLI.prototype.version = function () {
  var data = fs.readFileSync(path.join(__dirname, '..', 'package.json'))
  return JSON.parse(data).version
}
