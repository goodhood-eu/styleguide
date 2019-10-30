/* eslint-disable no-unused-vars */

class Person {
  // expect: space-before-function-paren
  hello () {
    // expect: quotes
    console.warn("Hello");
  }
  // expect: lines-between-class-members
  walk() {}

  // expect: no-dupe-class-members
  walk() {}
}
