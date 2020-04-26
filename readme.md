# @bemoje/arr-del-immutable

Immnutably remove an element from an array if it is present.

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-del-immutable" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-del-immutable" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-del-immutable" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-del-immutable.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-del-immutable" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-del-immutable.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-del-immutable" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-del-immutable" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-del-immutable/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-del-immutable" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-del-immutable
npm install --save @bemoje/arr-del-immutable
npm install --save-dev @bemoje/arr-del-immutable
```

## Usage

```javascript
import arrDelImmutable from '@bemoje/arr-del-immutable'

const arr = [1, 2]
const newArr = arrDelImmutable(arr, 1)

arr === newArr
//=> false

arr
//=> [1, 2]

newArr
//=> [2]

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrDelImmutable

Immnutably remove an element from an array if it is present.

##### Parameters

-   `arr` **[Array][3]** The array

-   `element` **any** The element to remove

##### Returns
**[Array][3]** A shallow clone of the passed array with the element removed

[1]: #arrdelimmutable

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array