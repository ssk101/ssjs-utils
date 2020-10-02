export function imgFromBuffer(buffer) {
  if(!buffer) return ''
  const base64 = btoa(
    buffer.data.reduce((data, byte) => data + String.fromCharCode(byte), '')
  )
  return `data:image/png;base64,${base64}`
}