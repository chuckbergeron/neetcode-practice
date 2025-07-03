const GREEN_CONSOLE_LOG_STRING = '\x1b[32m%s\x1b[0m'

// Converts arrays into JSON strings for comparison's sake
const primitiveArraysAreEqualJSON = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2)
}

// Uses the primitiveArraysAreEqualJSON test which won't account for objects with values in different orders, etc.
// Only useful for basic array comparisons. There are much better (but more complicated) solutions you could use
const logPrimitiveArraysEqual = (expectedOutputArray, resultArray) => {
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
    console.log(GREEN_CONSOLE_LOG_STRING, 'Pass!')
    console.log('')
    console.log(`Test's expected output:`)
    console.log(expectedOutputArray)
    console.log('')
    console.log('Your output:')
    console.log(resultArray)
    console.log('')
  }
}

const executeFunctionArray = (inputArray, classInstance = null, _class = null) => {
  const resultArray = []

  for (let i = 0; i < inputArray.length; i++) {
    let input = inputArray[i]

    if (typeof input === 'string') {
      if (!classInstance[input]) {
        console.error(`Could not find function '${input}()' in instance of ${classInstance.constructor.name} class`)
        throw new Error('asd')
      }

      let j = i + 1
      let args = []
      while (typeof inputArray[j] === 'number') {
        args.push(inputArray[j])
        j++
      }

      resultArray.push(classInstance[input](...args))
    }
  }

  return resultArray
}

module.exports = { logPrimitiveArraysEqual, primitiveArraysAreEqualJSON, executeFunctionArray }
