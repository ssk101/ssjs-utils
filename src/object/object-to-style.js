import { kebabCase } from '../string/kebab-case.js'

export function objectToStyle(obj) {
  if(!obj) return ''
  if(typeof obj === 'string') {
    return obj
  }

  return Object.keys(obj).reduce((acc, tag) => {
    const value = obj[tag]
    if(typeof value === 'object' && value !== null) {
      acc += `${tag} {\n${objectToStyle(value)}}\n`
    } else {
      if(!tag.startsWith('--')) {
        tag = kebabCase(tag)
      }
      acc += `${tag}: ${value};\n`
    }
    return acc
  }, '')
}
