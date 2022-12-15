# Coding Style Guide

![Welcome to the internet](https://i.kym-cdn.com/photos/images/newsfeed/000/221/156/welcome-to-internet.jpg)

This repository serves as a reference for our coding standards. You can read the common section, or jump to language specific pages.

- [JavaScript](javascript/README.md)
- [React](react/README.md)
- [CSS](css/README.md)
- [HTML](html/README.md)

## Common section

This answers generic questions regardless of language or technology.

## Table of Contents
- [Tabs or Spaces?](#tabs-or-spaces)
- [Maximum Line Length](#maximum-line-length)
- [Blank Lines](#blank-lines)
- [Trailing Whitespace](#trailing-whitespace)
- [Encoding](#encoding)
- [Naming Conventions](#naming-conventions)
- [Annotations](#annotations)

## Tabs or Spaces?

Use **spaces only**, with **2 spaces** per indentation level. Never mix tabs and spaces.

**[⬆ back to top](#table-of-contents)**

## Maximum Line Length

Limit all lines to a maximum of 90 characters. Going over the limit is tolerated, but frown upon. Please try to avoid it.

**[⬆ back to top](#table-of-contents)**

## Blank Lines

Separate top-level function and class definitions with a single blank line.

Separate method definitions inside of a class with a single blank line.

Use a single blank line within the bodies of methods or functions in cases where this improves readability (e.g., for the purpose of delineating logical sections).

**[⬆ back to top](#table-of-contents)**

## Trailing Whitespace

Do not leave trailing whitespaces. Use plugins to highlight that for you.

## Encoding

UTF-8 is the source file encoding.

**[⬆ back to top](#table-of-contents)**

## Annotations

Use annotations when necessary to describe a specific action that must be taken against the indicated block of code.

Write the annotation on the line immediately above the code that the annotation is describing.

The annotation keyword should be followed by a colon and a space, and a descriptive note.

```javascript
  // FIXME: The client's current state should *not* affect payload processing.
  resetClientState();
  processPayload();
```

If multiple lines are required by the description, indent subsequent lines with two spaces:

```javascript
  // TODO: Ensure that the value returned by this call falls within a certain
  //   range, or throw an exception.
  analyze();
```

Annotation types:

- `TODO`: describe missing functionality that should be added at a later date
- `FIXME`: describe broken code that must be fixed
- `REVIEW`: describe code that should be reviewed to confirm implementation

If a custom annotation is required, the annotation should be documented in the project's README.

**[⬆ back to top](#table-of-contents)**
