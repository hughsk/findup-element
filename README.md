# findup-element [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Given a child element, climb up the DOM and find the first parent element
matching your criteria.

Useful when dealing with event handlers.

## Usage

[![NPM](https://nodei.co/npm/findup-element.png)](https://nodei.co/npm/findup-element/)

### el = findup(child, filter)

Returns the first element passing the `filter(element)` function. Alternatively,
you can pass in an element name as a string or a single `HTMLElement`.

``` javascript
var findup = require('findup-element')

var parent = findup(el, 'div')
var parent = findup(el, canvas)
var parent = findup(el, function(parent) {
  return parent.hasAttribute('data-tag')
})
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/findup-element/blob/master/LICENSE.md) for details.
