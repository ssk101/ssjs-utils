import { camelCase } from './camel-case.js'
import { sentenceCase } from './sentence-case.js'

export function abbreviationCase(str) {
  let arr = []
  camelCase(str)
    .replace(/^[a-z]|[A-Z]/g, (m) => {
      arr.push(m)
    })
  return arr.join('').toUpperCase()
}