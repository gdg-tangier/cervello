import { Cervello } from "./../dist/cervello"
import { MathHelpers } from "./../src/math/index"

/**
 * @todo Complete the tests
 */
describe("NeuralNetwoek Testing", () => {

    let options = {
        iteration: 10000,
        hiddenLayer: 1,
        units: 3
    }

    let mind = new Cervello.NeuralNetwork(options)
        .train([
            { input: [0, 0], output: [0] },
            { input: [0, 1], output: [1] },
            { input: [1, 0], output: [1] },
            { input: [1, 1], output: [0] }
        ])

    test('Predicted value should be between 0 and 1', () => {
        var result = mind.predict([0, 1])[0][0]
        expect(result).toBeGreaterThan(0)
        expect(result).toBeLessThanOrEqual(1)
    })

    test('It should export the result as a string', () => {
        var exported = mind.export();
        var results = JSON.parse(exported)
        expect(results).toBeInstanceOf(Array)
    })
})