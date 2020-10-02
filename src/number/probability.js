export function probability(percentage = 50) {
  return Math.random() <= percentage / 100
}