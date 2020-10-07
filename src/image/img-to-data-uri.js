import { resizeWithAspectRatio } from './resize-with-aspect-ratio'

export function imgToDataUri(src, maxWidth, maxHeight, keepAspect = true) {
  if(typeof document === 'undefined') {
    throw new Error('Must run in browser context')
  }

  return new Promise(resolve => {
    const draw = (srcWidth, srcHeight) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      const dimensions = [ maxWidth || srcWidth, maxHeight || srcHeight ]

      Object.assign(
        canvas,
        keepAspect
          ? resizeWithAspectRatio(srcWidth, srcHeight, dimensions[0], dimensions[1])
          : { width: dimensions[0], height: dimensions[1] }
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