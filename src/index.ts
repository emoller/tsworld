import { exit } from 'process'

import input from './input.json'

input.sort()

for (let x = 0; x < input.length; ++x) {
  for (let y = 0; y < input.length; ++y) {
    for (let z = 0; z < input.length; ++z) {
      if (x === y || x === z || y === z) {
        continue
      } else {
        if (input[x] + input[y] + input[z] === 2020) {
          console.log(input[x] * input[y] * input[z])
          exit(0)
        }
      }
    }
  }
}
