export function humanCase(str) {
  str || (str = '')
  return str
    .replace(/([A-Z])/g, (_, match) => ' ' + match.toLowerCase())
    .replace(/[_\- ]+(.)/g, ' $1')
    .trim()
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}