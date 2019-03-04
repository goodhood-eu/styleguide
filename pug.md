# Pug Style Guide

We use pug (formerly jade) over pure html to avoid markup closure errors and to improve template readability.

You can find language reference here: [https://pugjs.org/](https://pugjs.org/).

## Table of Contents
- [General Rules](general-rules)
- [Inline JavaScript](inline-javascript)
- [Variables](variables)
- [Interpolation](interpolation)
- [JSON](json)

## General Rules

- Avoid trailing spaces. Trailing spaces break pug. If you need to put a space at the end of the line, use `&#32;`.
- IDs must be placed first
- Classes must use the dot syntax
- Classes describing the element should be placed first

```pug
//- bad
h1.c-header-title#id

//- bad
h1#id(class="c-header-title")

//- good
h1#id.c-header-title
```

**[⬆ back to top](#table-of-contents)**

## Inline JavaScript

Try to avoid inline JavaScript and always use Pug's indentation for blocks.

Prefer pug control structures.

**[⬆ back to top](#table-of-contents)**

## Variables

When only outputting a variable, use `tag= var` , not `tag #{var}`.

If you are declaring a new variable yourself, remember that Pug creates a local scope for each template. Use `var/let/const` statements and you'll be fine:

```pug
- const _class = null
```

**[⬆ back to top](#table-of-contents)**

## Interpolation

Interpolation is your friend. Always use interpolation in long blocks of text, or class names that require just a little bit extra:

```pug
a(href="/#{link}") Cap'n Awesome
```

**[⬆ back to top](#table-of-contents)**

## JSON

When you output JSON and raw JavaScript you need to always:

  1. Use unescaped version of output
  2. Stringify the object yourself
  3. Sanitize potentially unsafe strings to avoid possible XSS

```pug

script.
  var app = {
    config: !{JSON.stringify(config)},
    env: !{pleaseSomehowSanitizeThisString(JSON.stringify(env))}
  };

```

**[⬆ back to top](#table-of-contents)**
