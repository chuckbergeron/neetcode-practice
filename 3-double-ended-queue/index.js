const { Deque } = require('./deque.js')

// const testCaseArray1 = ['isEmpty', 'append', 10, 'isEmpty', 'appendleft', 20, 'popleft', 'pop', 'pop', 'append', 30, 'pop', 'isEmpty']
const testCaseArray2 = ['appendleft', 1, 'appendleft', 2, 'pop', 'pop']
const inputArray = testCaseArray2

// const testResultArray1 = [true, null, false, null, 20, 10, -1, null, 30, true]
const testResultArray2 = [null, null, 1, 2]

//
const expectedOutputArray = testResultArray2
const resultArray = []

let queue = new Deque()

for (let i = 0; i < inputArray.length; i++) {
  const input = inputArray[i]

  if (typeof input === 'string') {
    let j = i + 1
    let args = []
    while (typeof inputArray[j] === 'number') {
      args.push(inputArray[j])
      j++
    }
    resultArray.push(queue[input](...args))
  }
}

function primitiveArraysAreEqualJSON(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2)
}

if (!primitiveArraysAreEqualJSON(expectedOutputArray, resultArray)) {
  console.log('')
  console.error('Fail :(')
  console.log('')
  console.log(`Test's expected output:`)
  console.log(expectedOutputArray)
  console.log('')
  console.log(`Does not match your output:`)
  console.log(resultArray)
  console.log('')
} else {
  console.log('')
  console.log('\x1b[32m%s\x1b[0m', 'Pass!')
  console.log('')
  console.log(`Test's expected output:`)
  console.log(expectedOutputArray)
  console.log('')
  console.log('Your output:')
  console.log(resultArray)
  console.log('')
}
