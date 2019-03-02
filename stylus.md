# Stylus Style Guide

A Stylus guide. No other way of writing stylus is valid. Please read [SMACSS](https://smacss.com). If you don't know if you can use a certain styling thingy, use [http://caniuse.com](http://caniuse.com) to check. Language reference: [http://learnboost.github.io/stylus/](http://learnboost.github.io/stylus/).

## Table of Contents
- [Naming conventions](#naming-conventions)
- [Units](#units)
- [Specificity](#specificity)
- [Formatting](#formatting)
- [Vendor Prefixes](#vendor-prefixes)
- [Variable Names](#variable-names)
- [Property lookup](#property-lookup)
- [Strings](#strings)
- [Numbers](#numbers)
- [Units](#units)
- [Calculations](#calculations)
- [Colors](#colors)
- [Imports](#imports)
- [Extend](#extend)
- [Functions](#functions)

## Naming conventions

We are using a subset of [SMACSS](https://smacss.com) and use prefixes to separate elements on the page. Legend:

- `.l-` layout
- `.p-` page
- `.m-` module
- no prefix - state (example: `active`)

```stylus

.l-header
  background: #000

.p-index
  color: #333

.m-button
  font-size: 20px

  &.active
    color: #f00

```

Nested classes inherit first letter of it's ancestor name, This allows greater flexibility and name reuse. Example:

```jade
//- This is the markup
header.l-header
  h1.l-h-logo
  nav.l-h-nav
    a.l-h-n-item(href="/about") About

```

```stylus
.l-header
  overflow: hidden

  .l-h-logo
    font-size: 20px

  .l-h-nav
    float: right

  .l-h-n-item
    font-style: italic
```

As a rule of thumb, avoid unnecessary nesting in Stylus. At most, aim for three levels. If you cannot help it, step back and rethink your overall strategy (either the specificity needed, or the layout of the nesting).

Always put a class on everything. It is only OK to use a tagName if you're deeply nested, and styling a leef node.

**[⬆ back to top](#table-of-contents)**

## Units

Use `px` for `font-size`, because it offers absolute control over text. Additionally, unit-less `line-height` is preferred because it does not inherit a percentage value of its parent element, but instead is based on a multiplier of the `font-size`.

**[⬆ back to top](#table-of-contents)**

## Specificity

We never use Ids for styling. Leave dealing with Ids to JavaScript. Style with classes.

**[⬆ back to top](#table-of-contents)**

## Formatting

 - colons: **yes**
 - brackets: no
 - semicolons: hell no

```stylus
// bad
p {
  color: hotpink;
}

// bad
p
  color red

// good
p
  color: red
```

**[⬆ back to top](#table-of-contents)**

## Vendor Prefixes
Use nib instead of writing your own

```stylus
// bad
-webkit-border-radius: 4px
-moz-border-radius: 4px
border-radius: 4px

// good
@import 'nib'
border-radius: 4px
```

**[⬆ back to top](#table-of-contents)**

## Variable Names
Start variable names with a `$`. Stylus is not a programming language. Let's not use any forms of camelCase. Avoid using dashes in variable names too: it looks like a minus sign later in the code.

```stylus
main_color = white // bad
mainColour = white // bad
main-color = white // bad
$main_color = white // good
```

**[⬆ back to top](#table-of-contents)**

## Property lookup

Use property lookup to avoid creating unnecessary variables.

```stylus
 #logo
   position: absolute
   top: 50%
   left: 50%
   width: 150px
   height: 80px
   margin-left: -(@width / 2)
   margin-top: -(@height / 2)

```

**[⬆ back to top](#table-of-contents)**

## Strings

URLs and font names should be quoted:

```stylus
// good
$font_stack: 'Helvetica Neue Light', 'Helvetica', 'Arial', sans-serif

// bad
$font_stack: "Helvetica Neue Light", "Helvetica", "Arial", sans-serif

// bad
$font_stack: Helvetica Neue Light, Helvetica, Arial, sans-serif

// good
.foo
  background-image: url('/images/kittens.jpg')

// bad
.foo
  background-image: url(/images/kittens.jpg)
```

**[⬆ back to top](#table-of-contents)**

## Numbers

Drop trailing and leading zeros before a decimal value when you can:

```stylus
// good
.foo
  padding: 2em
  opacity: .5


// bad
.foo
  padding: 2.0em
  opacity: 0.5

```

**[⬆ back to top](#table-of-contents)**

## Units

When dealing with lengths, a 0 value should never ever have a unit.

```stylus
// good
$length: 0

// bad
$length: 0em
```

**[⬆ back to top](#table-of-contents)**

## Calculations

Top-level numeric calculations should always be wrapped in parentheses.

```stylus
// good
.foo
  width: (100% / 3)


// bad
.foo
  width: 100% / 3

```

**[⬆ back to top](#table-of-contents)**

## Colors

In order to make colors as simple as they can be, my advice would be to respect the following order of preference for color formats:

1. Hexadecimal notation. Preferably lowercase and shortened when possible
2. RGB notation
3. HSL notation

When using HSL or RGB notation, always add a single space after a comma (,) and no space between parentheses ((, )) and content.

```stylus
// good
.foo
  color: #f00

// bad
.foo
  color: #ff0000

// bad
.foo
  color: red

// good
.foo
  color: rgba(0, 0, 0, 0.1)
  background: hsl(300, 100%, 100%)

// bad
.foo
  color: rgba(0,0,0,0.1)
  background: hsl( 300, 100%, 100% )
```

**[⬆ back to top](#table-of-contents)**

## Imports

We place all imports in the main file. No nested imports please. Only exception: dedicated vendor imports file.

**[⬆ back to top](#table-of-contents)**

## Extend

Avoid using extend unless you have to. Please use mixins instead.

**[⬆ back to top](#table-of-contents)**

## Functions

We prefer using mixins over functions. If a function is absolutely necessary, document where it is used and why it wasn't possible to create a mixin.

**[⬆ back to top](#table-of-contents)**
