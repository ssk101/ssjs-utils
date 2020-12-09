export function PrettyDate(v) {
  const pad = (v) => String(v).padStart(2, 0)

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
  ].join('')
}
