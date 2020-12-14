export function PrettyTime(v) {
  const pad = (v, c = 2) => String(v).padStart(c, 0)

  const date = new Date(v)

  return [
    pad(date.getHours()),
    ':',
    pad(date.getMinutes()),
    ':',
    pad(date.getSeconds()),
    '.',
    pad(date.getMilliseconds(), 4),
  ].join('')
}
