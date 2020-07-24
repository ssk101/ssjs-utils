import { sentenceCase } from './sentence-case.js'

export function kebabCase(str) {
  return sentenceCase(str).replace(/[ ]/g, '-')
}