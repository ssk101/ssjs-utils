export function blendHex(from, to, bias = 0.5) {
  let x
  let y = (
    Math.round((to[0] - from[0]) * bias + from[0]) *
    0x10000 +
    Math.round((to[1] - from[1]) * bias + from[1]) *
    0x100 +
    Math.round((to[2] - from[2]) * bias + from[2])
  )

  if(((from[3]) > -1 && to[3] > -1)) {
    x = Math.round(((to[3] - from[3]) * bias + from[3]) * 255)
  }
  else if(to[3] > -1) {
    x = Math.round(to[3] * 255)
  }
  else if(from[3] > -1) {
    x = Math.round(from[3] * 255)
  } else {
    x = 255
  }

  return '#' + (0x100000000 + x * 0x1000000 + y)
    .toString(16)
    .slice(from[3] > -1 || to[3] > -1 ? 1 : 3)
}