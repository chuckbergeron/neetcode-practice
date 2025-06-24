const { Deque } = require('./deque.js')

// const testCaseArray1 = ['isEmpty', 'append', 10, 'isEmpty', 'appendleft', 20, 'popleft', 'pop', 'pop', 'append', 30, 'pop', 'isEmpty']
const testCaseArray2 = ['appendleft', 1, 'appendleft', 2, 'pop', 'pop']
const inputArray = testCaseArray2

// const testResultArray1 = [true, null, false, null, 20, 10, -1, null, 30, true]
const testResultArray2 = [null, null, 1, 2]

//
const outputArray = testResultArray2
const actualArray = []

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
    actualArray.push(queue[input](...args))
  }
}

function primitiveArraysAreEqualJSON(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2)
}

if (!primitiveArraysAreEqualJSON(outputArray, actualArray)) {
  console.error('Fail :(')
  console.log('Test result array: ', outputArray, ', does not match your result array `actualArray`: ', actualArray)
} else {
  console.log('Pass!')
  console.log('outputArray', outputArray)
  console.log('actualArray', actualArray)
}
