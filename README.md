# stylelint-config-lost

> Lost grid config for stylelint.

Tweaks [stylelint] rules to accept [lost grid] specific syntax.  
Can be used with any other config, e.g. [stylelint-config-standard].

## Installation

```
npm install stylelint-config-lost --save-dev
```

## Usage

```json
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-lost"
  ],
  "rules": {
    [...]
  }
}
```

## License

MIT © [Ivan Serniaev](https://github.com/delorge)

[stylelint]: https://github.com/stylelint/stylelint
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[Lost grid]: https://github.com/peterramsing/lost
