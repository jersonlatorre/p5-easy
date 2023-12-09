import p5 from 'p5'
let p = new p5(() => {})

/* Range */
p.range = (a, b = null, step = 1) => {
  let start = b === null ? 0 : a
  let end = b === null ? a : b
  let range = []

  for (let i = start; i < end; i += step) {
    range.push(i)
  }

  return range
}

export default p
