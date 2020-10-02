export function jsonToCSS(json) {
  return Object.keys(json).reduce((acc, tag) => {
    acc += tag
    acc += JSON.stringify(json[tag])
      .replace(/"/g, '')
      .replace(/,/g, ';')
    return acc
  }, '')
}