#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const CLI = require('./lib/index')

const c = new CLI({
  double: (number) => console.log(number * 2),
  echo: console.log,
  ping: () => console.log('pong')
})

c.answer(argv)
