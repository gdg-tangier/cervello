import { MathHelpers } from './../math/index'

export namespace Data {

    export class Normalize {

        /**
         * Normalized input.
         * 
         * @var input MathHelpers.Matrix
         */
        public input: MathHelpers.Matrix

        /**
         * Normalized output.
         * 
         * @var output MathHelpers.Matrix
         */
        public output: MathHelpers.Matrix

        /**
         * Create new Normalize instance.
         * 
         * @param input 
         * @param output 
         */
        public constructor(input: MathHelpers.Matrix, output: MathHelpers.Matrix) {
            this.input = input
            this.output = output
        }
    }

    export class Sum {

        /**
         * Sum.
         * 
         * @var sum MathHelpers.Matrix
         */
        public sum: MathHelpers.Matrix

        /**
         * Result after neural activation.
         * 
         * @var result MathHelpers.Matrix
         */
        public result: MathHelpers.Matrix

        /**
         * Create a new Sum instance.
         * 
         * @param sum 
         * @param result 
         */
        public constructor(sum: MathHelpers.Matrix, result: MathHelpers.Matrix) {
            this.sum = sum
            this.result = result
        }
    }
}