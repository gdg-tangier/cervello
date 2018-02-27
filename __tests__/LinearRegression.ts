import { Cervello } from "./../dist/cervello"

/**
 * @todo Complete the tests
 */
describe("Linear Regression Testing", () => {
    let data = { inputs: [1, 2, 3, 4, 5, 6], outputs: [1, 2, 3, 4, 5, 6] }
    const lr = new Cervello.LinearRegression()
    const lr2 = lr.train(data)
    
    test("Predicted value should be 7", () => {
        expect(lr.predict(7)).toBeGreaterThan(6.9)
        expect(lr.predict(7)).toBeLessThanOrEqual(7)
    })

    test("It should export the results as an array", () => {
        expect(lr.export()).toBeInstanceOf(Array)
    })
})