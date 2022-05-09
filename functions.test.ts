const {shuffleArray} = require('./utils')

let testArr = [1,2,3,4]

describe('shuffleArray should', () => {
    // test('shuffleArray should do anything', () => {
    //     expect(shuffleArray()).toHaveReturned()
    // })
    test('shuffleArr should return an Array', () => {
        // expect(shuffleArray().toBeCalled())
    //class example
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)
    })
    test('checks array of length with returns the same length', () => {
        expect(shuffleArray(testArr)).toHaveLength(testArr.length)
    })
    test('all the same items have the samw items are in the array', () => {
        //invoce shuffke array func then see if the values equal the same items 
        expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr))
    })
    test('the items have been shuffled', () => {
        //compairs the result of the function invoked to see if its the same as the same one 
        let result = shuffleArray(testArr)
        expect(result.join()).not.toEqual(testArr.join())
    })
})