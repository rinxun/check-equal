# check-equal

> A TypeScript library for checking whether two objects are equal (includes type), objects can be array/string/number/JSON/function, etc.

## Install

- npm

  ```sh
  npm install @rinxun/check-equal --save
  ```

- yarn

  ```sh
  yarn add @rinxun/check-equal --save
  ```

## Usage

- Import

  ```typescript
  import { checkEqual } from 'check-equal'
  ```

- Require

  ```typescript
  const { checkEqual } = require('check-equal')
  ```

## API

- `checkEqual(a, b, strictMode)`
  - `a` and `b` are two objects for checking, they can be array/string/number/JSON/function, etc.
  - `strictMode` defaults to `true`, if true we check by `===` internally, otherwise, we check by `==`.

## Example

```javascript
//Check two numbers

checkEqual(1, 1) //true

checkEqual(1, 2) //false

checkEqual(1.2, 1.2) //true

//Check two strings

checkEqual('1', '1') //true

checkEqual('1', '2') //false

checkEqual('Tom', 'Jerry') //false

//Check different types with strict mode

checkEqual('1', 1) //false

checkEqual('false', false) //false

//Check different types without strict mode

checkEqual('1', 1, false) //true

checkEqual(null, undefined, false) //true

//Check two booleans

checkEqual(true, true) //true

checkEqual(true, false) //false

//Check two arrays (will sort array items automatically, ignore the array which has different types)

checkEqual([1, 2, 3], [1, 2, 3]) //true

checkEqual([1, 2, 3], [3, 1, 2]) //true

checkEqual([1, 2, 3], [1, 2]) //false (different length)

checkEqual(['a', 'b', 'c'], ['a', 'b', 'c']) //true

checkEqual(['a', 'b', 'c'], ['b', 'c', 'a']) //true

checkEqual(['a', 'b', 'c'], ['a', 'B', 'c']) //false

//Check two Objects

checkEqual(
  { a: '1', b: 2, c: false, d: [1, 3, 5, 7], e: { x: 'x', y: 'y' } },

  { a: '1', b: 2, c: false, d: [1, 3, 5, 7], e: { x: 'x', y: 'y' } }
) //true

checkEqual(
  { a: '1', b: 2, c: false, d: [3, 7, 1, 5] },

  { a: '1', b: 2, c: false, d: [1, 3, 5, 7] }
) //true

checkEqual(
  { a: '1', b: 2, c: false, d: [1, 3, 5, 7], e: { x: 'x', y: 'y', z: 'z' } },

  { a: '1', b: 2, c: false, d: [1, 3, 5, 7], e: { x: 'x', y: 'y' } }
) //false

checkEqual({ a: '2', b: 2, c: false }, { a: '1', b: 2, c: false }) //false

checkEqual({ a: '1', b: 2, c: true }, { a: '1', b: 2, c: false }) //false

checkEqual({ a: '1', b: 0, c: false }, { a: '1', b: 2, c: false }) //false
```



<h2>Changelog</h2>

If you have recently updated, please read the [changelog](https://github.com/rinxun/check-equal/releases) for details of what has changed.
