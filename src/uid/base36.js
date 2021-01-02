export function base36(min, max) {
  return Math
    .floor(Math.random() * (max - min + 1) + min)
    .toString(36)
    .toUpperCase()
}