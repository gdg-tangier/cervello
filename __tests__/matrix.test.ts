import { MathHelpers } from "./../src/math/index"

describe("MathHelpers Testing", () => {
  let matrix = new MathHelpers.Matrix([[1, 2, 3]])
  let tmp: MathHelpers.Matrix
  test("Transpose Matrix", () => {
    tmp = matrix.transpose()
    expect(tmp.m).toEqual([[1], [2], [3]])
  })
})