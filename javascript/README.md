# JavaScript Style Guide

*A mostly reasonable approach to JavaScript*. Read the fine manual here: [http://bonsaiden.github.io/JavaScript-Garden/](http://bonsaiden.github.io/JavaScript-Garden/). Bonus read: [http://eloquentjavascript.net](http://eloquentjavascript.net).

Inspired by: [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript/blob/master/README.md)

> **Note**: this guide assumes you are using [Babel](https://babeljs.io). It also assumes you are installing shims/polyfills in your app.

## Table of Contents

  1. [Types](#types)
  1. [References](#references)
  1. [Objects](#objects)
  1. [Arrays](#arrays)
  1. [Destructuring](#destructuring)
  1. [Functions](#functions)
  1. [Arrow Functions](#arrow-functions)
  1. [Classes & Constructors](#classes--constructors)
  1. [Modules](#modules)
  1. [Iterators and Generators](#iterators-and-generators)
  1. [Properties](#properties)
  1. [Variables](#variables)
  1. [Hoisting](#hoisting)
  1. [Comparison Operators & Equality](#comparison-operators--equality)
  1. [Control Statements](#control-statements)
  1. [Comments](#comments)
  1. [Type Casting & Coercion](#type-casting--coercion)
  1. [Naming Conventions](#naming-conventions)
  1. [Accessors](#accessors)
  1. [Events](#events)
  1. [jQuery](#jquery)
  1. [ECMAScript 5 Compatibility](#ecmascript-5-compatibility)
  1. [ECMAScript 6+ (ES 2015+) Styles](#ecmascript-6-es-2015-styles)
  1. [Standard Library](#standard-library)
  1. [Testing](#testing)

## Types

  <a name="types--primitives"></a>
  - [1.1](#types--primitives) **Primitives**: When you access a primitive type you work directly on its value.

    - `string`
    - `number`
    - `boolean`
    - `null`
    - `undefined`
    - `symbol`

    ```javascript
    const foo = 1;
    let bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```

    - Symbols cannot be faithfully polyfilled, so they should not be used when targeting browsers/environments that don’t support them natively.

  <a name="types--complex"></a>
  - [1.2](#types--complex)  **Complex**: When you access a complex type you work on a reference to its value.

    - `object`
    - `array`
    - `function`

    ```javascript
    const foo = [1, 2];
    const bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```

**[⬆ back to top](#table-of-contents)**

## References

  <a name="references--block-scope"></a>
  - [2.1](#references--block-scope) Note that both `let` and `const` are block-scoped.

    ```javascript
    // const and let only exist in the blocks they are defined in.
    {
      let a = 1;
      const b = 1;
    }
    console.log(a); // ReferenceError
    console.log(b); // ReferenceError
    ```

**[⬆ back to top](#table-of-contents)**

## Objects

  <a name="es6-computed-properties"></a>
  - [3.1](#es6-computed-properties) Use computed property names when creating objects with dynamic property names.

    > Why? They allow you to define all the properties of an object in one place.

    ```javascript

    function getKey(k) {
      return `a key named ${k}`;
    }

    // bad
    const obj = {
      id: 5,
      name: 'San Francisco',
    };
    obj[getKey('enabled')] = true;

    // good
    const obj = {
      id: 5,
      name: 'San Francisco',
      [getKey('enabled')]: true,
    };
    ```

  <a name="objects--grouped-shorthand"></a>
  - [3.2](#objects--grouped-shorthand) Group your shorthand properties at the beginning of your object declaration.

    > Why? It’s easier to tell which properties are using the shorthand.

    ```javascript
    const anakinSkywalker = 'Anakin Skywalker';
    const lukeSkywalker = 'Luke Skywalker';

    // bad
    const obj = {
      episodeOne: 1,
      twoJediWalkIntoACantina: 2,
      lukeSkywalker,
      episodeThree: 3,
      mayTheFourth: 4,
      anakinSkywalker,
    };

    // good
    const obj = {
      lukeSkywalker,
      anakinSkywalker,
      episodeOne: 1,
      twoJediWalkIntoACantina: 2,
      episodeThree: 3,
      mayTheFourth: 4,
    };
    ```

  <a name="objects--rest-spread"></a>
  - [3.3](#objects--rest-spread) Prefer the object spread operator over [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.

    ```javascript
    // very bad
    const original = { a: 1, b: 2 };
    const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
    delete copy.a; // so does this

    // bad
    const original = { a: 1, b: 2 };
    const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

    // good
    const original = { a: 1, b: 2 };
    const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

    const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
    ```

**[⬆ back to top](#table-of-contents)**

## Arrays

  <a name="arrays--push"></a>
  - [4.1](#arrays--push) Use [Array#push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) instead of direct assignment to add items to an array.

    ```javascript
    const someStack = [];

    // bad
    someStack[someStack.length] = 'abracadabra';

    // good
    someStack.push('abracadabra');
    ```

  <a name="es6-array-spreads"></a>
  - [4.2](#es6-array-spreads) Use array spreads `...` to copy arrays.

    ```javascript
    // bad
    const len = items.length;
    const itemsCopy = [];
    let i;

    for (i = 0; i < len; i += 1) {
      itemsCopy[i] = items[i];
    }

    // good
    const itemsCopy = items.slice();

    // best
    const anotherCopy = [...items];
    ```

  <a name="arrays--from-iterable"></a>
  - [4.3](#arrays--from-iterable) To convert an iterable object to an array, use spreads `...` instead of [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

    ```javascript
    const foo = document.querySelectorAll('.foo');

    // good
    const nodes = Array.from(foo);

    // best
    const nodes = [...foo];
    ```

  <a name="arrays--from-array-like"></a>
  - [4.4](#arrays--from-array-like) Use [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) for converting an array-like object to an array.

    ```javascript
    const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

    // bad
    const arr = Array.prototype.slice.call(arrLike);

    // good
    const arr = Array.from(arrLike);
    ```

  <a name="arrays--mapping"></a>
  - [4.5](#arrays--mapping) Use [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) instead of spread `...` for mapping over iterables, because it avoids creating an intermediate array. Use this for Map/Set etc.

    ```javascript
    // bad
    const baz = [...foo].map(bar);

    // good
    const baz = Array.from(foo, bar);
    ```

  <a name="arrays--bracket-newline"></a>
  - [4.6](#arrays--bracket-newline) Use line breaks after open and before close array brackets if an array has multiple lines

    ```javascript
    // bad
    const arr = [
      [0, 1], [2, 3], [4, 5],
    ];

    const objectInArray = [{
      id: 1,
    }, {
      id: 2,
    }];

    const numberInArray = [
      1, 2,
    ];

    // good
    const arr = [[0, 1], [2, 3], [4, 5]];

    const objectInArray = [
      { id: 1 },
      {
        id: 2,
        anotherPropThatIsTooLong: 3,
      },
    ];

    const numberInArray = [
      1,
      2,
    ];
    ```

**[⬆ back to top](#table-of-contents)**

## Destructuring

  <a name="destructuring--object-over-array"></a>
  - [5.1](#destructuring--object-over-array) Use object destructuring for multiple return values, not array destructuring.

    > Why? You can add new properties over time or change the order of things without breaking call sites.

    ```javascript
    // bad
    function processInput(input) {
      // then a miracle occurs
      return [left, right, top, bottom];
    }

    // the caller needs to think about the order of return data
    const [left, __, top] = processInput(input);

    // good
    function processInput(input) {
      // then a miracle occurs
      return { left, right, top, bottom };
    }

    // the caller selects only the data they need
    const { left, top } = processInput(input);
    ```

**[⬆ back to top](#table-of-contents)**

## Functions

  <a name="es6-default-parameters"></a>
  - [6.1](#es6-default-parameters) Use default parameter syntax rather than mutating function arguments.

    ```javascript
    // really bad
    function (opts) {
      // No! We shouldn’t mutate function arguments.
      // Double bad: if opts is falsy it'll be set to an object which may
      // be what you want but it can introduce subtle bugs.
      opts = opts || {};
      // ...
    }

    // still bad
    function (opts) {
      if (opts === void 0) {
        opts = {};
      }
      // ...
    }

    // good
    function (opts = {}) {
      // ...
    }
    ```

  <a name="functions--default-side-effects"></a>
  - [6.2](#functions--default-side-effects) Avoid side effects with default parameters.

    > Why? They are confusing to reason about.

    ```javascript
    var b = 1;
    // bad
    function (a = b++) {
      console.log(a);
    }
    count();  // 1
    count();  // 2
    count(3); // 3
    count();  // 3
    ```

  <a name="functions--defaults-last"></a>
  - [6.3](#functions--defaults-last) Always put default parameters last.

    ```javascript
    // bad
    function (opts = {}, name) {
      // ...
    }

    // good
    function (name, opts = {}) {
      // ...
    }
    ```
**[⬆ back to top](#table-of-contents)**

## Arrow Functions

  <a name="arrows--paren-wrap"></a>
  - [7.1](#arrows--paren-wrap) In case the expression spans over multiple lines, wrap it in parentheses for better readability.

    > Why? It shows clearly where the function starts and ends.

    ```javascript
    // bad
    ['get', 'post', 'put'].map((httpMethod) => Object.prototype.hasOwnProperty.call(
        httpMagicObjectWithAVeryLongName,
        httpMethod,
      )
    );

    // good
    ['get', 'post', 'put'].map((httpMethod) => (
      Object.prototype.hasOwnProperty.call(
        httpMagicObjectWithAVeryLongName,
        httpMethod,
      )
    ));
    ```

**[⬆ back to top](#table-of-contents)**

## Classes & Constructors

  <a name="constructors--use-class"></a>
  - [8.1](#constructors--use-class) Always use `class`. Avoid manipulating `prototype` directly.

    > Why? `class` syntax is more concise and easier to reason about.

    ```javascript
    // bad
    function Queue(contents = []) {
      this.queue = [...contents];
    }
    Queue.prototype.pop = function () {
      const value = this.queue[0];
      this.queue.splice(0, 1);
      return value;
    };

    // good
    class Queue {
      constructor(contents = []) {
        this.queue = [...contents];
      }
      pop() {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
      }
    }
    ```

  <a name="constructors--extends"></a>
  - [8.2](#constructors--extends) Use `extends` for inheritance.

    > Why? It is a built-in way to inherit prototype functionality without breaking `instanceof`.

    ```javascript
    // bad
    const inherits = require('inherits');
    function PeekableQueue(contents) {
      Queue.apply(this, contents);
    }
    inherits(PeekableQueue, Queue);
    PeekableQueue.prototype.peek = function () {
      return this.queue[0];
    };

    // good
    class PeekableQueue extends Queue {
      peek() {
        return this.queue[0];
      }
    }
    ```

  <a name="constructors--chaining"></a>
  - [8.3](#constructors--chaining) Methods can return `this` to help with method chaining.

    ```javascript
    // bad
    Jedi.prototype.jump = function () {
      this.jumping = true;
      return true;
    };

    Jedi.prototype.setHeight = function (height) {
      this.height = height;
    };

    const luke = new Jedi();
    luke.jump(); // => true
    luke.setHeight(20); // => undefined

    // good
    class Jedi {
      jump() {
        this.jumping = true;
        return this;
      }

      setHeight(height) {
        this.height = height;
        return this;
      }
    }

    const luke = new Jedi();

    luke.jump()
      .setHeight(20);
    ```

  <a name="constructors--tostring"></a>
  - [8.4](#constructors--tostring) It’s okay to write a custom `toXXX()` method, just make sure it works successfully and causes no side effects.

    ```javascript
    class Jedi {
      constructor(options = {}) {
        this.name = options.name || 'no name';
      }

      getName() {
        return this.name;
      }

      toString() {
        return `Jedi - ${this.getName()}`;
      }
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Modules

  <a name="modules--use-them"></a>
  - [9.1](#modules--use-them) Prefer modules (`import`/`export`) over a non-standard module system.

    ```javascript
    // ok
    const StyleGuide = require('./StyleGuide');
    module.exports = StyleGuide.es6;

    // better
    import StyleGuide from './StyleGuide';
    export default StyleGuide.es6;

    // best
    import { es6 } from './StyleGuide';
    export default es6;
    ```

  <a name="modules--no-wildcard"></a>
  - [9.2](#modules--no-wildcard) Do not use wildcard imports.

    > Why? This makes sure you have a single default export.

    ```javascript
    // bad
    import * as StyleGuide from './StyleGuide';

    // good
    import StyleGuide from './StyleGuide';
    ```

  <a name="modules--multiline-imports-over-newlines"></a>
  - [9.3](#modules--multiline-imports-over-newlines) Multiline imports should be indented just like multiline array and object literals.

    > Why? The curly braces follow the same indentation rules as every other curly brace block in the style guide, as do the trailing commas.

    ```javascript
    // bad
    import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';

    // good
    import {
      longNameA,
      longNameB,
      longNameC,
      longNameD,
      longNameE,
    } from 'path';
    ```

  <a name="modules--absolute-imports"></a>
  - [9.4](#modules--absolute-imports) **(Webpack) Recommendation**: Prevent long relative paths in import by using absolute paths.
    > Why? Relative imports traversing multiple parent directories can get unreadable.

    ```javascript
    // /client/components/feed_list/index.js
    
    // bad
    import State from '../../containers/feed/state';

    // good
    import State from '@/client/containers/feed/state';
    ```
    
    ```javascript
    // /client/components/feed_list/sub/component.js
    
    // bad
    import utils from '@/client/components/feed_list/utils';
    
    // good 
    import utils from '../utils';
    ```

**[⬆ back to top](#table-of-contents)**

## Iterators and Generators

  <a name="generators--nope"></a>
  - [10.1](#generators--nope) Don’t use generators for now.

    > Why? They don’t transpile well to ES5.
    
**[⬆ back to top](#table-of-contents)**

## Properties

  <a name="properties--bracket"></a>
  - [11.1](#properties--bracket) Use bracket notation `[]` when accessing properties with a variable.

    ```javascript
    const luke = {
      jedi: true,
      age: 28,
    };

    const getProp = function (prop) {
      return luke[prop];
    }

    const isJedi = getProp('jedi');
    ```

**[⬆ back to top](#table-of-contents)**

## Variables

  <a name="variables--const-let-group"></a>
  - [12.1](#variables--const-let-group) Group all your `const`s and then group all your `let`s.

    > Why? This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

    ```javascript
    // bad
    let i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;

    // bad
    let i;
    const items = getItems();
    let dragonball;
    const goSportsTeam = true;
    let len;

    // good
    const goSportsTeam = true;
    const items = getItems();
    let dragonball;
    let i;
    let length;
    ```

  <a name="variables--define-where-used"></a>
  - [12.2](#variables--define-where-used) Assign variables where you need them, but place them in a reasonable place.

    > Why? `let` and `const` are block scoped and not function scoped.

    ```javascript
    // bad - unnecessary function call
    const checkName = function (hasName) {
      const name = getName();

      if (hasName === 'test') {
        return false;
      }

      if (name === 'test') {
        this.setName('');
        return false;
      }

      return name;
    }

    // good
    const checkName = function (hasName) {
      if (hasName === 'test') {
        return false;
      }

      const name = getName();

      if (name === 'test') {
        this.setName('');
        return false;
      }

      return name;
    }
    ```
  <a name="variables--unary-increment-decrement"></a>
  - [12.3](#variables--unary-increment-decrement) Avoid using unary increments and decrements (`++`, `--`). eslint [`no-plusplus`](https://eslint.org/docs/rules/no-plusplus)

    > Why? Per the eslint documentation, unary increment and decrement statements are subject to automatic semicolon insertion and can cause silent errors with incrementing or decrementing values within an application. It is also more expressive to mutate your values with statements like `num += 1` instead of `num++` or `num ++`. Disallowing unary increment and decrement statements also prevents you from pre-incrementing/pre-decrementing values unintentionally which can also cause unexpected behavior in your programs.

    ```javascript
    // bad
    const array = [1, 2, 3];
    let num = 1;
    num++;
    --num;

    let sum = 0;
    let truthyCount = 0;
    for (let i = 0; i < array.length; i++) {
      let value = array[i];
      sum += value;
      if (value) {
        truthyCount++;
      }
    }

    // good
    const array = [1, 2, 3];
    let num = 1;
    num += 1;
    num -= 1;

    const sum = array.reduce((a, b) => (a + b), 0);
    const truthyCount = array.filter(Boolean).length;
    ```

<a name="variables--linebreak"></a>
  - [12.4](#variables--linebreak) Avoid linebreaks before or after `=` in an assignment. If your assignment violates [`max-len`](https://eslint.org/docs/rules/max-len.html), surround the value in parens. eslint [`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak.html).

    > Why? Linebreaks surrounding `=` can obfuscate the value of an assignment.

    ```javascript
    // bad
    const foo =
      superLongLongLongLongLongLongLongLongFunctionName();

    // bad
    const foo
      = 'superLongLongLongLongLongLongLongLongString';

    // good
    const foo = (
      superLongLongLongLongLongLongLongLongFunctionName()
    );

    // good
    const foo = 'superLongLongLongLongLongLongLongLongString';
    ```
    
**[⬆ back to top](#table-of-contents)**

## Hoisting

  <a name="hoisting--about"></a>
  - [13.1](#hoisting--about) `var` declarations get hoisted to the top of their closest enclosing function scope, their assignment does not. `const` and `let` declarations are blessed with a new concept called [Temporal Dead Zones (TDZ)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_Dead_Zone). It’s important to know why [typeof is no longer safe](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15).

    ```javascript
    // we know this wouldn’t work (assuming there
    // is no notDefined global variable)
    function example() {
      console.log(notDefined); // => throws a ReferenceError
    }

    // creating a variable declaration after you
    // reference the variable will work due to
    // variable hoisting. Note: the assignment
    // value of `true` is not hoisted.
    function example() {
      console.log(declaredButNotAssigned); // => undefined
      var declaredButNotAssigned = true;
    }

    // the interpreter is hoisting the variable
    // declaration to the top of the scope,
    // which means our example could be rewritten as:
    function example() {
      let declaredButNotAssigned;
      console.log(declaredButNotAssigned); // => undefined
      declaredButNotAssigned = true;
    }

    // using const and let
    function example() {
      console.log(declaredButNotAssigned); // => throws a ReferenceError
      console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
      const declaredButNotAssigned = true;
    }
    ```

  <a name="hoisting--anon-expressions"></a>
  - [13.2](#hoisting--anon-expressions) Anonymous function expressions hoist their variable name, but not the function assignment.

    ```javascript
    function example() {
      console.log(anonymous); // => undefined

      anonymous(); // => TypeError anonymous is not a function

      var anonymous = function () {
        console.log('anonymous function expression');
      };
    }
    ```

  <a name="hoisting--named-expresions"></a><a name="hoisting--named-expressions"></a>
  - [13.3](#hoisting--named-expressions) Named function expressions hoist the variable name, not the function name or the function body.

    ```javascript
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      superPower(); // => ReferenceError superPower is not defined

      var named = function superPower() {
        console.log('Flying');
      };
    }

    // the same is true when the function name
    // is the same as the variable name.
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      var named = function named() {
        console.log('named');
      };
    }
    ```

  <a name="hoisting--declarations"></a>
  - [13.4](#hoisting--declarations) Function declarations hoist their name and the function body.

    ```javascript
    function example() {
      superPower(); // => Flying

      function superPower() {
        console.log('Flying');
      }
    }
    ```

  - For more information refer to [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting/) by [Ben Cherry](http://www.adequatelygood.com/).

**[⬆ back to top](#table-of-contents)**

## Comparison Operators & Equality

  <a name="comparison--if"></a>
  - [14.1](#comparison--if) Conditional statements such as the `if` statement evaluate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:

    - **Objects** evaluate to **true**
    - **Undefined** evaluates to **false**
    - **Null** evaluates to **false**
    - **Booleans** evaluate to **the value of the boolean**
    - **Numbers** evaluate to **false** if **+0, -0, or NaN**, otherwise **true**
    - **Strings** evaluate to **false** if an empty string `''`, otherwise **true**

    ```javascript
    if ([0] && []) {
      // true
      // an array (even an empty one) is an object, objects will evaluate to true
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Control Statements

  <a name="control-statements"></a>
  - [15.1](#control-statements) In case your control statement (`if`, `while` etc.) gets too long or exceeds the maximum line length, each (grouped) condition could be put into a new line. The logical operator should begin the line.

    > Why? Requiring operators at the beginning of the line keeps the operators aligned and follows a pattern similar to method chaining. This also improves readability by making it easier to visually follow complex logic.

    ```javascript
    // bad
    if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
      thing1();
    }

    // bad
    if (foo === 123 &&
      bar === 'abc') {
      thing1();
    }

    // bad
    if (foo === 123
      && bar === 'abc') {
      thing1();
    }

    // ok
    if (
      foo === 123 &&
      bar === 'abc'
    ) {
      thing1();
    }

    // good
    if (
      foo === 123
      && bar === 'abc'
    ) {
      thing1();
    }

    // good
    if (
      (foo === 123 || bar === 'abc')
      && doesItLookGoodWhenItBecomesThatLong()
      && isThisReallyHappening()
    ) {
      thing1();
    }

    // good
    if (foo === 123 && bar === 'abc') {
      thing1();
    }
    ```

  <a name="control-statement--value-selection"></a><a name="control-statements--value-selection"></a>
  - [15.2](#control-statements--value-selection) Don't use selection operators in place of control statements.

    ```javascript
    // bad
    !isRunning && startRunning();

    // good
    if (!isRunning) {
      startRunning();
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Comments
  <a name="comments--singleline"></a>
  - [16.1](#comments--singleline) Prefer to place comments on a newline above the subject of the comment. Put an empty line before the comment unless it’s on the first line of a block.

    ```javascript
    // ok
    const active = true;  // is current tab

    // good
    // is current tab
    const active = true;

    // bad
    function getType() {
      console.log('fetching type...');
      // set the default type to 'no type'
      const type = this.type || 'no type';

      return type;
    }

    // good
    function getType() {
      console.log('fetching type...');

      // set the default type to 'no type'
      const type = this.type || 'no type';

      return type;
    }

    // also good
    function getType() {
      // set the default type to 'no type'
      const type = this.type || 'no type';

      return type;
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Type Casting & Coercion

  <a name="coercion--explicit"></a>
  - [17.1](#coercion--explicit) Perform type coercion at the beginning of the statement.

  <a name="coercion--comment-deviations"></a>
  - [17.2](#coercion--comment-deviations) If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use Bitshift for [performance reasons](https://jsperf.com/coercion-vs-casting/3), leave a comment explaining why and what you’re doing.

    ```javascript
    // good
    /**
     * parseInt was the reason my code was slow.
     * Bitshifting the String to coerce it to a
     * Number made it a lot faster.
     */
    const val = inputValue >> 0;
    ```

  <a name="coercion--bitwise"></a>
  - [17.3](#coercion--bitwise) **Note:** Be careful when using bitshift operations. Numbers are represented as [64-bit values](https://es5.github.io/#x4.3.19), but bitshift operations always return a 32-bit integer ([source](https://es5.github.io/#x11.7)). Bitshift can lead to unexpected behavior for integer values larger than 32 bits. [Discussion](https://github.com/airbnb/javascript/issues/109). Largest signed 32-bit Int is 2,147,483,647:

    ```javascript
    2147483647 >> 0; // => 2147483647
    2147483648 >> 0; // => -2147483648
    2147483649 >> 0; // => -2147483647
    ```
**[⬆ back to top](#table-of-contents)**

## Naming Conventions

  <a name="naming--self-this"></a>
  - [18.1](#naming--self-this) Don’t save references to `this`. Use arrow functions or [Function#bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).

    ```javascript
    // bad
    function foo() {
      const that = this;
      return function () {
        console.log(that);
      };
    }

    // good
    function foo() {
      return () => {
        console.log(this);
      };
    }
    ```

  <a name="naming--uppercase"></a>
  - [18.2](#naming--uppercase) Uppercase business logic constants that never change.

    ```javascript
    // bad
    export const valueTypeID = 42;

    // good
    export const VALUE_TYPE_ID = 42;
    ```

**[⬆ back to top](#table-of-contents)**

## Accessors

  <a name="accessors--not-required"></a>
  - [19.1](#accessors--not-required) Accessor functions for properties are not required.

  <a name="accessors--no-getters-setters"></a>
  - [19.2](#accessors--no-getters-setters) Do not use JavaScript getters/setters as they cause unexpected side effects and are harder to test, maintain, and reason about. Instead, if you do make accessor functions, use `getVal()` and `setVal('hello')`.

    ```javascript
    // bad
    class Dragon {
      get age() {
        // ...
      }

      set age(value) {
        // ...
      }
    }

    // good
    class Dragon {
      getAge() {
        // ...
      }

      setAge(value) {
        // ...
      }
    }
    ```

  <a name="accessors--boolean-prefix"></a>
  - [19.3](#accessors--boolean-prefix) If the property/method is a `boolean`, use `isXXX()` or `hasXXX()`.

    ```javascript
    // bad
    if (!dragon.age()) {
      return false;
    }

    // good
    if (!dragon.hasAge()) {
      return false;
    }
    ```

  <a name="accessors--consistent"></a>
  - [19.4](#accessors--consistent) It’s okay to create `get()` and `set()` functions, but be consistent.

    ```javascript
    class Jedi {
      constructor(options = {}) {
        const lightsaber = options.lightsaber || 'blue';
        this.set('lightsaber', lightsaber);
      }

      set(key, val) {
        this[key] = val;
      }

      get(key) {
        return this[key];
      }
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Events

  <a name="events--hash"></a>
  - [20.1](#events--hash) When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass an object literal (also known as a "hash")  instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event. For example, instead of:

    ```javascript
    // bad
    $(this).trigger('listingUpdated', listing.id);

    // ...

    $(this).on('listingUpdated', (e, listingID) => {
      // do something with listingID
    });
    ```

    prefer:

    ```javascript
    // good
    $(this).trigger('listingUpdated', { listingID: listing.id });

    // ...

    $(this).on('listingUpdated', (e, data) => {
      // do something with data.listingID
    });
    ```

  **[⬆ back to top](#table-of-contents)**

## jQuery

  <a name="jquery--dollar-prefix"></a>
  - [21.1](#jquery--dollar-prefix) Prefix jQuery object variables with a `$`.

    ```javascript
    // bad
    const sidebar = $('.sidebar');

    // good
    const $sidebar = $('.sidebar');

    // good
    const $sidebarBtn = $('.sidebar-btn');
    ```

  <a name="jquery--cache"></a>
  - [21.2](#jquery--cache) Cache jQuery lookups.

    ```javascript
    // bad
    function setSidebar() {
      $('.sidebar').hide();

      // ...

      $('.sidebar').css({
        'background-color': 'pink',
      });
    }

    // good
    function setSidebar() {
      const $sidebar = $('.sidebar');
      $sidebar.hide();

      // ...

      $sidebar.css({
        'background-color': 'pink',
      });
    }
    ```

  <a name="jquery--queries"></a>
  - [21.3](#jquery--queries) For DOM queries use Cascading `$('.sidebar ul')` or parent > child `$('.sidebar > ul')`. [jsPerf](http://jsperf.com/jquery-find-vs-context-sel/16)

  <a name="jquery--find"></a>
  - [21.4](#jquery--find) Use `find` with scoped jQuery object queries.

    ```javascript
    // bad
    $('ul', '.sidebar').hide();

    // bad
    $('.sidebar').find('ul').hide();

    // good
    $('.sidebar ul').hide();

    // good
    $('.sidebar > ul').hide();

    // good
    $sidebar.find('ul').hide();
    ```

**[⬆ back to top](#table-of-contents)**

## ECMAScript 5 Compatibility

  <a name="es5-compat--kangax"></a>
  - [22.1](#es5-compat--kangax) Refer to [Kangax](https://twitter.com/kangax/)’s ES5 [compatibility table](https://kangax.github.io/es5-compat-table/).

**[⬆ back to top](#table-of-contents)**

<a name="ecmascript-6-styles"></a>
## ECMAScript 6+ (ES 2015+) Styles

  <a name="es6-styles"></a>
  - [23.1](#es6-styles) This is a collection of links to the various ES6+ features.

1. [Arrow Functions](#arrow-functions)
1. [Classes](#classes--constructors)
1. [Object Shorthand](#es6-object-shorthand)
1. [Object Concise](#es6-object-concise)
1. [Object Computed Properties](#es6-computed-properties)
1. [Template Strings](#es6-template-literals)
1. [Destructuring](#destructuring)
1. [Default Parameters](#es6-default-parameters)
1. [Rest](#es6-rest)
1. [Array Spreads](#es6-array-spreads)
1. [Let and Const](#references)
1. [Exponentiation Operator](#es2016-properties--exponentiation-operator)
1. [Iterators and Generators](#iterators-and-generators)
1. [Modules](#modules)

**[⬆ back to top](#table-of-contents)**

## Standard Library

  The [Standard Library](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects)
  contains utilities that are functionally broken but remain for legacy reasons.

**[⬆ back to top](#table-of-contents)**

## Testing

  - Whichever testing framework you use, you should be writing tests!
  - Strive to write many small pure functions, and minimize where mutations occur.
  - Be cautious about stubs and mocks - they can make your tests more brittle.
  - 100% test coverage is a good goal to strive for, even if it’s not always practical to reach it.
  - Whenever you fix a bug, _write a regression test_. A bug fixed without a regression test is almost certainly going to break again in the future.

**[⬆ back to top](#table-of-contents)**
