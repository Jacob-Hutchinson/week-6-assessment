const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should do anything', () => {
        expect(shuffleArray()).toHaveReturned()
    })
    test('shuffleArr should return an Array', () => {
        expect(shuffleArray().toBeCalled())
    })
})