const GREEN_CONSOLE_LOG_STRING = '\x1b[32m%s\x1b[0m'
const CAPITAL_FIRST_LETTER_REGEX = /^[A-Z]/

// Converts arrays into JSON strings for comparison's sake
const primitiveArraysAreEqualJSON = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2)
}

// Uses the primitiveArraysAreEqualJSON test which won't account for objects with values in different orders, etc.
// Only useful for basic array comparisons. There are much better (but more complicated) solutions you could use
const logPrimitiveArraysEqual = (expectedOutputArray, resultArray) => {
  const isEqual = primitiveArraysAreEqualJSON(expectedOutputArray, resultArray)

  const logSection = (title, value) => {
    console.log(title, value)
  }

  console.log('')
  if (isEqual) {
    console.log(GREEN_CONSOLE_LOG_STRING, 'Pass!\n')
  } else {
    console.error('Fail :(\n')
  }
  logSection('Expected output:', expectedOutputArray)
  logSection('Your output:    ', resultArray)
  console.log('')
}

/**
 * Takes an input array of a class name, function names, and arguments. Executes each function and returns
 * a new array of each result.
 *
 * @param {String|Number[]} inputArray, an optional class name at start to instantiate, function names and their respective args
 * @param {Class} _class, named with a leading underscore since 'class' is a restricted word in JS
 *
 * @returns {String|Number|Object|null[]}, the resultant array
 */
const executeFunctionArray = (inputArray, _class) => {
  const classInstance = _instantiateClass(inputArray, _class)

  return _executeInputArrayFunctions(inputArray, classInstance)
}

const _instantiateClass = (inputArray, _class) => {
  // Instantiate a new instance of the passed in class if necessary
  if (CAPITAL_FIRST_LETTER_REGEX.test(inputArray[0])) {
    if (!_class) {
      console.error(
        `First element in inputArray is the name of a class to be used. Please provide the class itself as the 3rd function argument`
      )
      throw new Error('Invalid arguments')
    }

    const className = inputArray.shift()
    if (className !== _class.name) {
      console.error(`First arg of inputArray '${className}' doesn't match provided class '${_class.name}'`)
      throw new Error('Invalid arguments')
    }
  }

  const args = _getConstructorArgs(inputArray)
  classInstance = new _class(...args)

  return classInstance
}

const _getConstructorArgs = (inputArray) => {
  const args = []
  let i = 0

  while (typeof inputArray[i] === 'number') {
    args.push(inputArray[i])
    i++
  }

  inputArray.splice(0, i)

  return args
}

const _getFunctionArgs = (inputArray, i) => {
  let j = i + 1
  let args = []
  while (typeof inputArray[j] === 'number') {
    args.push(inputArray[j])
    j++
  }

  return args
}

const _executeInputArrayFunctions = (inputArray, classInstance) => {
  const resultArray = []

  for (let i = 0; i < inputArray.length; i++) {
    let input = inputArray[i]

    if (typeof input === 'string') {
      if (!classInstance[input]) {
        console.error(`Could not find function '${input}()' in instance of ${classInstance.constructor.name} class`)
        throw new Error('Invalid function name')
      }

      const args = _getFunctionArgs(inputArray, i)

      resultArray.push(classInstance[input](...args))
    }
  }

  return resultArray
}

module.exports = { logPrimitiveArraysEqual, primitiveArraysAreEqualJSON, executeFunctionArray }
