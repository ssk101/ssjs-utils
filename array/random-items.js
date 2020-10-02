import { probability } from '../number/probability.js'

export function randomItems(arr, amount = 1, probabilities = {}) {
  if(!amount) return

  const ret = []

  const pickItem = () => {
    for(const i in [...Array(amount).keys()]) {
      const picked = arr[Math.floor(Math.random() * (arr.length))]

      if(probabilities[picked]) {
        if(!probability(probabilities[picked])) {
          arr = arr.filter(item => item !== picked)
          return pickItem()
        }
      }

      ret.push(picked)
    }
  }

  pickItem()

  if(amount === 1) return ret[0]
  return ret
}