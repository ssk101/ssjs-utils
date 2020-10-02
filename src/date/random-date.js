import moment from 'moment'

export function randomDate(min = 18, max = 90) {
  return +moment()
    .subtract(Math.floor(Math.random() * (max - min + 1)) + min + 1, 'years')
    .add(Math.floor(Math.random() * 12) + 1, 'months')
    .add(Math.floor(Math.random() * 31) + 1, 'days')
}