const c = [...Array(26)].map((_, y) => String.fromCharCode(y + 65))
const n = [...Array(10).keys()]
const defaultChars = c.join('') + c.join('').toLowerCase() + n.join('')

export function randomChars(length = 5, chars) {
  if(!chars) {
    chars = defaultChars
  }

  const ret = []

  while(ret.length < length) {
    const char = chars.charAt(Math.floor(Math.random() * chars.length))

    if(ret.indexOf(char) == -1) {
      ret.push(char)
    }
  }

  return ret.join('')
}