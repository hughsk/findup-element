var mln = require('multiline')
var domify = require('domify')
var findup = require('./')
var test = require('tape')

var dom = domify(mln(function(){/*
  <p>
    <div class="top" height="200">
      <span class="mid">
        <div class="bot"></div>
      </span>
    </div>
  </p>
*/}))

var top = dom.querySelector('.top')
var bot = dom.querySelector('.bot')
var mid = dom.querySelector('.mid')

test('findup-element: function', function(t) {
  t.equal(findup(bot, function(node) {
    return node.getAttribute('height') === '200'
  }), top, 'works with arbitrary functions')

  t.end()
})

test('findup-element: element name', function(t) {
  t.equal(findup(top, 'div'), top, 'matches itself')
  t.equal(findup(bot, 'div'), bot, 'matches itself, even when parents applicable')
  t.equal(findup(mid, 'div'), top, 'matches closest parent')
  t.equal(findup(top, 'span'), null, 'return null if not found')
  t.end()
})

test('findup-element: HTMLElement', function(t) {
  t.equal(findup(top, top), top, 'matches itself')
  t.equal(findup(bot, bot), bot, 'matches itself')
  t.equal(findup(top, bot), null, "doesn't match child elements")
  t.equal(findup(bot, mid), mid, 'matches parent elements')
  t.equal(findup(mid, top), top, 'matches parent elements')
  t.end()
})
