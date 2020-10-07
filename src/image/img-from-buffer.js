export function imgFromBuffer(buffer, type = 'png') {
  if(!buffer) return ''

  const base64 = (() => {
    if(typeof btoa === 'function') {
      return btoa(
        buffer.data.reduce((data, byte) => data + String.fromCharCode(byte), '')
      )
    }
    return Buffer.from(buffer).toString('base64')

  })()

  return `data:image/${type};base64,${base64}`
}