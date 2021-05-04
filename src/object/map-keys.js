export function mapKeys(o = {}, cb) {
  return Object.entries(o).reduce((acc, [k, v]) => {
    acc[cb(k, v)] = v
    return acc
  }, {})
}