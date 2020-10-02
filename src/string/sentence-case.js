export function sentenceCase(str) {
  str || (str = '')
  return str
    .replace(/([A-Z])/g, (_, match) => ' ' + match.toLowerCase())
    .replace(/[_\- ]+(.)/g, ' $1')
    .trim()
}