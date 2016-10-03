const CLI = require('../lib/index')
const test = require('tape')

var c = null

test('setup', function (t) {
  c = new CLI()
  t.ok(c, 'init CLI')
  t.end()
})

test('usage', function (t) {
  var got = c.usage()
  t.true(got.match(/usage/), 'returns some instructions')
  t.true(got.length > 50, 'lots of instructions')
  t.end()
})

test('version', function (t) {
  var got = c.version()
  t.true(got.match(/^\d+\.\d+\.\d+$/), 'finds basic semver in package.json')
  t.end()
})
