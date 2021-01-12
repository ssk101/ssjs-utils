import { snakeCase } from '../string/snake-case.js'

export function snakeKeys(params, merge = {}) {
  const ret = {}
  const data = Object.assign({}, params, merge)
  for(const k in data) {
    ret[snakeCase(k)] = data[k]
  }

  return ret
}