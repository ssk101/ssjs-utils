const defaultChars = [...Array(26)].map((_, y) => String.fromCharCode(y + 65))
const numbers = [...Array(10).keys()]

export function randomChars(chars, length = 5) {
  if(!chars || !chars.length) {
    chars = defaultChars + defaultChars.toLowerCase() + numbers
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