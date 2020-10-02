import { sentenceCase } from './sentence-case.js'

export function snakeCase(str) {
  return sentenceCase(str).replace(/[ ]/g, '_')
}