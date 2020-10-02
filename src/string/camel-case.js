import { sentenceCase } from './sentence-case.js'

export function camelCase(str) {
  return sentenceCase(str)
    .replace(/\s(.)/g, (_, match) => match.toUpperCase())
}