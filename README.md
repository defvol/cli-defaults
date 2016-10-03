# cli-defaults

Add default answers to your command line script.

This module will provide these options by default:
- help
- version

### Demo

Default commands:

```
% ./example.js
% ./example.js --version
0.1.0
% ./example.js --help
Any cli tool should provide these options
usage: cli-defaults [options]

 --help prints this message
 --version prints package version

```

You can add custom commands:

```
% ./example.js --ping
pong
% ./example.js --echo 'hello world'
hello world
% ./example.js --double 42
84
```

### Install

```
% npm install --save cli-defaults
```

### Usage

```js
const argv = require('minimist')(process.argv.slice(2))
const CLI = require('cli-defaults')

const c = new CLI({
  ping: () => console.log('pong')
})

c.answer(argv)
```
_provides default commands (help, version) + one custom 'ping' command_

For more details check example.js and test/index.test.js
