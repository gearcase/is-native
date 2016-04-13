# is-native

> Checks if the given value is a native function.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/is-native/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/is-native/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/is-native)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/is-native/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/is-native)


## Install

```
$ npm install --save is-native 
```


## Usage

```js
var isNative = require('is-native');

isNative(Math.min);    // => true
isNative(console.log); // => true

isNative(function () { console.log(123); });              
// => false
```


## Related

- [is-nil](https://github.com/bubkoo/is-nil) - Checks if the given value is null or undefined.
- [is-null](https://github.com/bubkoo/is-null) - Checks if the given value is null.
- [is-window](https://github.com/bubkoo/is-window) - Checks if the given value is a window object.
- [is-array-like](https://github.com/bubkoo/is-array-like) - Checks if the given value is an array or an array-like object.
- [is-index](https://github.com/bubkoo/is-index) - Checks if the given value is a valid array-like index.
- [is-length](https://github.com/bubkoo/is-length) - Checks if the given value is a valid array-like length.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/is-native/issues/new).
