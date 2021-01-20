import { camelCase } from '../string/camel-case.js'

export function camelKeys(o, seen = []) {
  if(~seen.indexOf(o)) return o

  seen.push(o)

  if(Array.isArray(o)) {
    o.forEach(o => camelKeys(o, seen))
  } else if(o != null && typeof o === 'object') {
    Object.keys(o).forEach(key => {
      var value = camelKeys(o[key], seen)
      delete o[key]
      o[camelCase(key)] = value
    })
  }
  return o
}