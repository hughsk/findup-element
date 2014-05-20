module.exports = findup

function findup(child, check) {
  if (typeof check === 'string')   check = byName(check)
  if (typeof check !== 'function') check = byExact(check)

  while (
    child &&
   !check(child)
  ) child = child.parentNode


  return child || null
}

function byName(name) {
  name = String(name).toUpperCase()

  return function(element) {
    return name === element.nodeName
  }
}

function byExact(el) {
  return function(element) {
    return el === element
  }
}
