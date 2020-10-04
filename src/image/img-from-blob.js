export async function imgFromBlob(blob) {
  if(!blob) return ''

  const reader = new FileReader()

  reader.readAsDataURL(blob)

  return new Promise(resolve => {
    reader.onloadend = () => resolve(reader.result)
  })
}
