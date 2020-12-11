export function PrettyTime(v) {
  const pad = (v, c = 2) => String(v).padStart(c, 0)

  const date = new Date(v)

  return [
    date.getFullYear(),
    '/',
    date.getMonth() + 1,
    '/',
    date.getDate(),
    ' ',
    pad(date.getHours()),
    ':',
    pad(date.getMinutes()),
    ':',
    pad(date.getSeconds()),
    '.',
    pad(date.getMilliseconds(), 3),
  ].join('')
}
