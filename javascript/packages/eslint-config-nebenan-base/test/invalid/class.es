/* eslint-disable no-unused-vars */

class Person {
  // expect: no-useless-constructor, no-empty-function
  constructor() {}

  // expect: space-before-function-paren
  hello () {
  }
  // expect: lines-between-class-members
  walk() {}

  // expect: no-dupe-class-members
  walk() {}
}
