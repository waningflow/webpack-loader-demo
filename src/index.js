import { add } from './utils'

class Calculate {
  constructor(base = 0) {
    this.base = base
  }

  valueOf() {
    return this.base
  }

  next() {
    return add(this.base, 1)
  }
}

let cal = new Calculate(10)

console.log(cal.valueOf())
console.log(cal.next())
