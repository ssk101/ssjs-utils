import { resizeWithAspectRatio } from './resize-with-aspect-ratio'

export function imgToDataUri(src, maxWidth, maxHeight, keepAspect = true) {
  if(typeof document === 'undefined') {
    throw new Error('Must run in browser context')
  }

  return new Promise(resolve => {
    const draw = (srcWidth, srcHeight) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      Object.assign(
        canvas,
        keepAspect
          ? resizeWithAspectRatio(srcWidth, srcHeight, maxWidth, maxHeight)
          : width: maxWidth, height: maxHeight
      )

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      return canvas.toDataURL()
    }

    const img = new Image
    img.src = src

    img.onload = () => {
      resolve(draw(img.width, img.height))
    }
  })
}