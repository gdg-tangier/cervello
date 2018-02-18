import { MathHelpers } from "./../src/math/index"

import {Cervello}  from "./../dist/cervello"

/**
 * @todo complete the tests
 */
describe("Nerual Network Testing", () => {

  let options = {
    iteration: 10000,
    hiddenLayer: 1,
    units: 3
  }

  let mind = new Cervello.NeuralNetwork(options)
      .train([
        { input: [0, 0], output: [ 0 ] },
        { input: [0, 1], output: [ 1 ] },
        { input: [1, 0], output: [ 1 ] },
        { input: [1, 1], output: [ 0 ] }
      ])

      test('Predicted value should be between 0 and 1', () => {

        var result = mind.predict([0,1])[0][0]

        expect(result).toBeGreaterThan(0)

        expect(result).toBeLessThanOrEqual(1)

      })
})

describe("Linear Regression Testing", () => {
    let data = {inputs: [1,2,3,4,5,6], outputs: [1,2,3,4,5,6]}
        const lr = new Cervello.LinearRegression()
        const lr2 = lr.train(data)
        test("Predicted value should be 7", () => {
            expect(lr.predict(7)).toBeGreaterThan(6.9)
            expect(lr.predict(7)).toBeLessThanOrEqual(7)
        })
})


describe("MathHelpers Testing", () => {
    // TODO: write tests for MathHelpres
})