# CSS / Sass / CSS Modules Styleguide

*A mostly reasonable approach to CSS and Sass*

When you don't know if you can use a certain way of styling, see [https://caniuse.com](https://caniuse.com) to check. Language reference: [https://sass-lang.com/](https://sass-lang.com/).

## Table of Contents

1. [Terminology](#terminology)
    - [Rule Declaration](#rule-declaration)
    - [Selectors](#selectors)
    - [Properties](#properties)
1. [CSS](#css)
    - [Formatting](#formatting)
    - [Comments](#comments)
    - [ID Selectors](#id-selectors)
1. [Sass](#sass)
    - [Syntax](#syntax)
    - [Ordering](#ordering-of-property-declarations)
    - [Variables](#variables)
    - [Mixins](#mixins)
    - [Extend directive](#extend-directive)
    - [Nested selectors](#nested-selectors)
    - [Naming conventions](#naming-conventions)
    - [Units](#units)
    - [Vendor Prefixes](#vendor-prefixes)
    - [Strings](#strings)
    - [Numbers](#numbers)
    - [Calculations](#calculations)
    - [Colors](#colors)
    - [Imports](#imports)
    - [Extend](#extend)
    - [Functions](#functions)
1. [CSS Modules](#css-modules)

## Terminology

### Rule declaration

A “rule declaration” is the name given to a selector (or a group of selectors) with an accompanying group of properties. Here's an example:

```css
.listing {
  font-size: 18px;
  line-height: 1.2;
}
```

### Selectors

In a rule declaration, “selectors” are the bits that determine which elements in the DOM tree will be styled by the defined properties. Selectors can match HTML elements, as well as an element's class, ID, or any of its attributes. Here are some examples of selectors:

```css
.my-element-class {
  /* ... */
}

[aria-hidden] {
  /* ... */
}
```

### Properties

Finally, properties are what give the selected elements of a rule declaration their style. Properties are key-value pairs, and a rule declaration can contain one or more property declarations. Property declarations look like this:

```css
/* some selector */ {
  background: #f1f1f1;
  color: #333;
}
```

**[⬆ back to top](#table-of-contents)**

## CSS

### Formatting

* Use soft tabs (2 spaces) for indentation.
* Use camelCase in class names (see [CSS Modules](#css-modules)).
  - Use dashes outside of CSS modules
* Do not use ID selectors.
* When using multiple selectors in a rule declaration, give each selector its own line.
* Put a space before the opening brace `{` in rule declarations.
* In properties, put a space after, but not before, the `:` character.
* Put closing braces `}` of rule declarations on a new line.
* Put blank lines between rule declarations.

**Bad**

```css
.avatar{
    border-radius:50%;
    border:2px solid white; }
.no, .nope, .not_good {
    // ...
}
#lol-no {
  // ...
}
```

**Good**

```css
.avatar {
  border-radius: 50%;
  border: 2px solid white;
}

.one,
.selector,
.per-line {
  // ...
}
```

### Comments

* Prefer line comments (`//` in Sass-land) to block comments.
* Prefer comments on their own line. Avoid end-of-line comments.
* Write detailed comments for code that isn't self-documenting:
  - Uses of z-index
  - Compatibility or browser-specific hacks

### ID selectors

While it is possible to select elements by ID in CSS, it should generally be considered an anti-pattern. ID selectors introduce an unnecessarily high level of [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) to your rule declarations, and they are not reusable.

For more on this subject, read [CSS Wizardry's article](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/) on dealing with specificity.

**[⬆ back to top](#table-of-contents)**

## Sass

### Syntax

* Use the `.scss` syntax, never the original `.sass` syntax
* Order your regular CSS and `@include` declarations logically (see below)

### Ordering of property declarations

1. Property declarations

    List all standard property declarations, anything that isn't an `@include` or a nested selector.

    ```scss
    .btn-green {
      background: green;
      font-weight: bold;
      // ...
    }
    ```

2. `@include` declarations

    Grouping `@include`s at the beginning makes it easier to read the entire selector and allows to override parts of the mixin.

    ```scss
    .btn-green {
      @include transition(background 0.5s ease);
      // ...
      background: green;
      font-weight: bold;
    }
    ```

3. Nested selectors

    Nested selectors, _if necessary_, go last, and nothing goes after them. Add whitespace between your rule declarations and nested selectors, as well as between adjacent nested selectors. Apply the same guidelines as above to your nested selectors.

    ```scss
    .btn {
      @include transition(background 0.5s ease);

      background: green;
      font-weight: bold;

      .icon {
        margin-right: 10px;
      }
    }
    ```

### Variables

Prefer camelCased variable names (e.g. `$myVariable`) over dash-cased or snake_cased variable names. It is acceptable to prefix variable names that are intended to be used only within the same file with an underscore (e.g. `$_myVariable`).

### Mixins

Mixins should be used to DRY up your code, add clarity, or abstract complexity--in much the same way as well-named functions. Mixins that accept no arguments can be useful for this, but note that if you are not compressing your payload (e.g. gzip), this may contribute to unnecessary code duplication in the resulting styles.

### Extend directive

`@extend` should be avoided because it has unintuitive and potentially dangerous behavior, especially when used with nested selectors. Even extending top-level placeholder selectors can cause problems if the order of selectors ends up changing later (e.g. if they are in other files and the order the files are loaded shifts). Gzipping should handle most of the savings you would have gained by using `@extend`, and you can DRY up your stylesheets nicely with mixins.

### Nested selectors

**Do not nest selectors more than three levels deep!**

```scss
.page-container {
  .content {
    .profile {
      // STOP!
    }
  }
}
```

When selectors become this long, you're likely writing CSS that is:

* Strongly coupled to the HTML (fragile) *—OR—*
* Overly specific (powerful) *—OR—*
* Not reusable


Again: **never nest ID selectors!**

If you must use an ID selector in the first place (and you should really try not to), they should never be nested. If you find yourself doing this, you need to revisit your markup, or figure out why such strong specificity is needed. If you are writing well formed HTML and CSS, you should **never** need to do this.

### Units

Use `px` for `font-size`, because it offers absolute control over text. Additionally, unit-less `line-height` is preferred because it does not inherit a percentage value of its parent element, but instead is based on a multiplier of the `font-size`.

When dealing with 0 omit units.

```scss
// bad
$length: 0em;

// good
$length: 0;
```

### Vendor Prefixes
Use autoprefixer instead of writing your own

```scss
// bad
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
border-radius: 4px;

// good
border-radius: 4px;
```

### Strings

URLs and font names should be quoted. Use single quotes (`''`) and not double quotes (`"`).

```scss
// bad
$fonts: "Helvetica Neue Light", "Helvetica", "Arial", sans-serif;

// bad
$fonts: Helvetica Neue Light, Helvetica, Arial, sans-serif;

// good
$fonts: 'Helvetica Neue Light', 'Helvetica', 'Arial', sans-serif;

// good
.foo {
  background-image: url('/images/kittens.jpg');
}

// bad
.foo {
  background-image: url(/images/kittens.jpg);
}
```

### Numbers

Drop trailing and leading zeros before a decimal value when you can:

```scss
// bad
.foo {
  padding: 2.0em;
  opacity: 0.5;
}

// good
.foo {
  padding: 2em;
  opacity: .5;
}
```

### Calculations

Top-level numeric calculations should always be wrapped in parentheses.

```scss
// bad
.foo {
  width: 100% / 3;
}

// good
.foo {
  width: (100% / 3);
}
```

### Colors

In order to make colors as simple as they can be, respect the following order of preference for color formats:

1. Hexadecimal notation. Preferably lowercase and shortened when possible
2. RGB notation

When using HSL or RGB notation, always add a single space after a comma (,) and no space between parentheses ((, )) and content.

```scss
// bad
.foo {
  color: red;
}

// bad
.foo {
  color: #ff0000;
}

// bad
.foo {
  color: rgba( 0,0,0,0.1 );
}

// good
.foo {
  color: #f00;
}

// good
.foo {
  color: rgba(0, 0, 0, .1);
}
```

### Functions

We prefer using mixins over functions. If a function is absolutely necessary, document where it is used and why it wasn't possible to create a mixin.

**[⬆ back to top](#table-of-contents)**

## CSS Modules

[CSS Modules documentation](https://github.com/css-modules/css-modules)

- Prefer using CSS Modules over global css code
- Use camelCase for class names
- Always use `.module.css` or `.module.scss` extension
- Do not expect any scss variables or mixins to be defined. You have to import them yourself.
- Use Sass whenever possible over similar CSS module functionality (composition, variables, import)
- Css or Sass specific rules still apply (CSS Modules rules take precedence)

```scss
// bad
.foo-bar {
  color: red;
}

// good
.fooBar {
    color: red;
}

// bad 
@value v-primary: #BF4040;

// good
$primaryColor: #BF4040;
```

```jsx
import styles from "./foo.module.scss"

// ...

// bad
return <div className={styles['foo-bar']}>

// good
return <div className={styles.fooBar}>
```

**[⬆ back to top](#table-of-contents)**
