# Stylus Style Guide

A stylish stylus style guide. No other way of writing stylus is valid. Please read [SMACSS](https://smacss.com). When you don't know if you can use a certain way of styling, see [https://caniuse.com](https://caniuse.com) to check. Language reference: [http://stylus-lang.com](http://stylus-lang.com).

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

- `.p-` page
- `.c-` component
- `.ui-` UI-Kit element
- `.is-` or `.has-` state (example: `is-active`)

Page styles may override component styles when needed.

```stylus
.p-home
  color: #333

  .c-header
    background: #000

  .c-button
    font-size: 20px

    &.active
      color: #f00

```

Use underscores to join multi-word names: `p-this_is_a_long_page_name` and dashes to reflect nesting. Nested element classes inherit their ancestor names. This allows greater flexibility and name reuse. Example:

```html
//- This is the markup
<header class="c-header">
  <h1 class="c-header-title">Title</h1>
  <nav class="c-header-navigation">
    <a href="/about" class="c-header-navigation-link">About</a>
  </nav>
</header>
```

```stylus
.c-header
  overflow: hidden

.c-header-title
  font-size: 20px

.c-header-navigation
  float: right

.c-header-navigation-link
  font-style: italic
```

As a rule of thumb, avoid unnecessary nesting in Stylus. At most, aim for three levels. If you can't help it, step back and rethink your overall strategy.

Always put a class on everything. It is only OK to use a tagName selector if you're styling a leaf node.

**[⬆ back to top](#table-of-contents)**

## Units

Use `px` for `font-size`, because it offers absolute control over text. Additionally, unit-less `line-height` is preferred because it does not inherit a percentage value of its parent element, but instead is based on a multiplier of the `font-size`.

**[⬆ back to top](#table-of-contents)**

## Specificity

We never use IDs for styling. Style with classes.

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
Use autoprefixer instead of writing your own

```stylus
// bad
-webkit-border-radius: 4px
-moz-border-radius: 4px
border-radius: 4px

// good
border-radius: 4px
```

**[⬆ back to top](#table-of-contents)**

## Variable Names
Start variable names with a `$`. Use camelCase to name your variables. Avoid using dashes and underscores in variable names as it looks like a minus sign in the code.

```stylus
// bad
main_color = white
mainColour = white
main-color = white

// good
$mainColor = white
```

**[⬆ back to top](#table-of-contents)**

## Property lookup

Use property lookup to avoid creating unnecessary variables.

```stylus
.ui-logo
  width: 150px
  height: 80px
  margin-left: -(@width / 2)
  margin-top: -(@height / 2)
  position: absolute
  top: 50%
  left: 50%
```

**[⬆ back to top](#table-of-contents)**

## Strings

URLs and font names should be quoted. Use single quotes (`''`) and not double quotes (`"`).

```stylus
// bad
$fonts = "Helvetica Neue Light", "Helvetica", "Arial", sans-serif

// bad
$fonts = Helvetica Neue Light, Helvetica, Arial, sans-serif

// good
$fonts = 'Helvetica Neue Light', 'Helvetica', 'Arial', sans-serif

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
// bad
.foo
  padding: 2.0em
  opacity: 0.5

// good
.foo
  padding: 2em
  opacity: .5
```

**[⬆ back to top](#table-of-contents)**

## Units

When dealing with 0 omit units.

```stylus
// bad
$length = 0em

// good
$length = 0
```

**[⬆ back to top](#table-of-contents)**

## Calculations

Top-level numeric calculations should always be wrapped in parentheses.

```stylus
// bad
.foo
  width: 100% / 3

// good
.foo
  width: (100% / 3)
```

**[⬆ back to top](#table-of-contents)**

## Colors

In order to make colors as simple as they can be, respect the following order of preference for color formats:

1. Hexadecimal notation. Preferably lowercase and shortened when possible
2. RGB notation

When using HSL or RGB notation, always add a single space after a comma (,) and no space between parentheses ((, )) and content.

```stylus
// bad
.foo
  color: red

// bad
.foo
  color: #ff0000

// bad
.foo
  color: rgba( 0,0,0,0.1 )

// good
.foo
  color: #f00

// good
.foo
  color: rgba(0, 0, 0, .1)
```

**[⬆ back to top](#table-of-contents)**

## Extend

Avoid using extend unless you have to. Please use mixins instead.

**[⬆ back to top](#table-of-contents)**

## Functions

We prefer using mixins over functions. If a function is absolutely necessary, document where it is used and why it wasn't possible to create a mixin.

**[⬆ back to top](#table-of-contents)**
