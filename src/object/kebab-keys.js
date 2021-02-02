import { kebabCase } from '../string/kebab-case.js'

export function kebabKeys(params, merge = {}) {
  const ret = {}
  const data = Object.assign({}, params, merge)
  for(const k in data) {
    ret[kebabCase(k)] = data[k]
  }

  return ret
}