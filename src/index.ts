import { MathHelpers } from "./math/index"
import { Data } from "./data/index"

export namespace Cervello {

    export class LinearRegression {
        /**
         * @var a number
         */
        public a: number;

        /**
         * @var b number
         */
        public b: number;

        /**
         * @var data Array<number>
         */
        protected data: Array<number>;

        /**
         * @var iteration number
         */
        protected iteration: number = 1000;

        /**
         * @var LearningRate: number
         */
        protected learningRate: number = 0.001;

        /**
         * Create new LinearRegression instance.
         */
        public constructor(options: any) {
            if (options) {
                this.iteration = options.iteration ? options.iteration : this.iteration
                this.learningRate = options.learningRate ? options.learningRate : this.learningRate
            }

            this.a = 0
            this.b = 0
        }

        /**
         * Train the linear Model.
         * 
         * @param data any
         * 
         * @return Promise
         */
        public train(data: any): Promise<any> {
            let error: number;
            return new Promise<any>((res, rej) => {
                for (let i = 0; i < this.iteration; i++) {
                    this.gradientDec(data)
                }

                res([this.a, this.b])
            })
        }

        /**
         * calculate gradient descent.
         * 
         * @param data any
         */
        private gradientDec(data: any): void {

            let a_gr: number = 0;
            let b_gr: number = 0;
            let x: number = 0;
            let y: number = 0;
            let Total: number = data.inputs.length
            for (let i = 0; i < data.inputs.length; i++) {
                x = data.inputs[i]
                y = data.outputs[i]
                a_gr += -1 * ((2 / data.inputs.length) * x * (y - ((this.a * x) + this.b)))
                b_gr += -1 * ((2 / data.inputs.length) * (y - ((this.a * x) + this.b)))
            }

            this.a = this.a - (a_gr * this.learningRate)
            this.b = this.b - (b_gr * this.learningRate)
        }

        /**
         * Predict output
         * 
         * @param input number
         */
        public predict(input: number) {
            // y = ax + b
            return (input * this.a) + this.b
        }

        /**
         * Import Model.
         * 
         * @param data 
         */
        public import(data: Array<number>): void {
            this.a = data[0]
            this.b = data[1]
        }

        /**
         * export model
         * 
         * @return Array<number>
         */
        public export(): Array<number> {
            return [this.a, this.b]
        }
    }

    export class NeuralNetwork {

        /**
         * Wedges.
         * 
         * @var w MathHelpers.Matrix[]
         */
        protected w: MathHelpers.Matrix[];

        /**
         * Units of each layer
         * 
         * @var middleLayerUnits number
         */
        protected middleLayerUnits: number = 3;

        /**
         * hidden layers.
         * 
         * @var mddleLayer number
         */
        protected middleLayer: number = 1;

        /**
         * Iteration
         * 
         * @var iteration number
         */
        protected iteration: number = 3

        /**
         * Learning rate.
         * 
         * @var learningRate number
         */
        protected learningRate: number = 0.01

        /**
         * Activation method.
         * 
         * @var activation any
         */
        protected activation: MathHelpers.differentiable = new MathHelpers.Activation.Sigmoid()

        /**
         * Create new instance.
         * 
         * @param options Array
         */
        public constructor(options?: any) {
            if (options) {
                this.iteration = options.iteration ? options.iteration : this.iteration
                this.learningRate = options.learningRate ? options.learningRate : this.learningRate
                this.middleLayer = options.hiddenLayer ? options.hiddenLayer : this.middleLayer
                this.middleLayerUnits = options.units ? options.units : this.middleLayerUnits
                if (options.activator === "htan") {
                    this.activation = new MathHelpers.Activation.Htan()
                }
            }
        }

        /**
         * Training model.
         * 
         * @param input
         * 
         * @return NeuralNetwork
         */
        public train(input: Array<any>): NeuralNetwork {
            let data: Data.Normalize
            let result: any = null
            let back: any = null
            data = this.format(input)
            if (!this.w) {
                this.boot(data)
            }
            for (let i = 0; i < this.iteration; i++) {
                result = this.forward(data.input)

                back = this.back(data, result)
            }

            return this
        }

        /**
         * Setup wedges.
         * 
         * @param data Data.Normalize
         */
        protected boot(data: Data.Normalize): void {

            this.w = []

            this.w.push(new MathHelpers.Matrix(
                {
                    rows: this.middleLayerUnits,
                    cols: data.input.m[0].length,
                    values: MathHelpers.Gaussian.random
                }));

            for (let i = 1; i < this.middleLayer; i++) {
                this.w.push(new MathHelpers.Matrix(
                    {
                        rows: this.middleLayerUnits,
                        cols: this.middleLayerUnits,
                        values: MathHelpers.Gaussian.random
                    }
                ))
            }

            this.w.push(new MathHelpers.Matrix(
                {
                    rows: data.output.m[0].length,
                    cols: this.middleLayerUnits,
                    values: MathHelpers.Gaussian.random
                }
            ))
        }

        /**
         * Forward propagation.
         * 
         * @param data MathHelpers.Matrix
         * 
         * @return Array<Data.sum>
         */
        private forward(data: MathHelpers.Matrix): Array<Data.Sum> {

            let result: Array<Data.Sum> = []

            result.push(this.mutiply(this.w[0], data.transpose()))

            for (let i = 1; i < this.middleLayer; i++) {
                result.push(this.mutiply(this.w[i], result[i - 1].result))
            }

            result.push(this.mutiply(this.w[this.w.length - 1], result[result.length - 1].result, true))

            return result
        }

        /**
         * Backward propagation.
         * 
         * @param data Data.Normalize 
         * @param results Array<Data.Sum>
         * 
         * @return MathHelpers.Matrix
         */
        private back(data: Data.Normalize, results: Array<Data.Sum>): MathHelpers.Matrix {

            let diff = MathHelpers.Matrix.subtract(data.output.transpose(), results[results.length - 1].result)
            let delta = MathHelpers.Matrix.multiplyElements(results[results.length - 1].sum.transform(this.activation.prime), diff)
            let changes = MathHelpers.Matrix.multiplyScalar(MathHelpers.Matrix.multiply(delta, results[this.middleLayer - 1].result.transpose()), this.learningRate)

            this.w[this.w.length - 1] = MathHelpers.Matrix.add(this.w[this.w.length - 1], changes)

            for (let i = 1; i < this.middleLayer; i++) {
                delta = MathHelpers.Matrix.multiplyElements(MathHelpers.Matrix.multiply(this.w[this.w.length - i].transpose(), delta), results[results.length - (i + 1)].sum.transform(this.activation.prime))
                changes = MathHelpers.Matrix.multiplyScalar(MathHelpers.Matrix.multiply(delta, results[results.length - (i + 1)].result.transpose()), this.learningRate)
                this.w[this.w.length - (i + 1)] = MathHelpers.Matrix.add(this.w[this.w.length - (i + 1)], changes)
            }

            delta = MathHelpers.Matrix.multiplyElements(MathHelpers.Matrix.multiply(this.w[1].transpose(), delta), results[0].sum.transform(this.activation.prime))
            changes = MathHelpers.Matrix.multiplyScalar(MathHelpers.Matrix.multiply(delta, data.input), this.learningRate)
            this.w[0] = MathHelpers.Matrix.add(this.w[0], changes)

            return diff
        }

        /**
         * Predict result.
         * 
         * @param input Array<number>
         * 
         * @return number
         */
        public predict(input: Array<number>): Array<number> {

            let predict = this.forward(new MathHelpers.Matrix([input]))

            return predict[predict.length - 1].result.m
        }

        /**
         * Sum.
         * 
         * @param w MathHelpers.Matrix
         * @param data MathHelpers.Matrix
         * 
         * @return Data.sum
         */
        private mutiply(w: MathHelpers.Matrix, data: MathHelpers.Matrix, hidden?: boolean): Data.Sum {
            let result: MathHelpers.Matrix
            let sum: MathHelpers.Matrix
            sum = MathHelpers.Matrix.multiply(w, data)
            result = sum.transform(this.activation.value)
            const response = new Data.Sum(sum, result)

            return response;
        }

        /**
         * Normalize input.
         * 
         * @param inputData Array<any>
         * 
         * @return Data.Normalize
         */
        protected format(inputData: Array<any>): Data.Normalize {
            let input: Array<number>[] = []
            let output: Array<number>[] = []

            for (let i = 0; i < inputData.length; i++) {
                input.push(inputData[i].input)
                output.push(inputData[i].output)
            }

            return new Data.Normalize(new MathHelpers.Matrix(input), new MathHelpers.Matrix(output))
        }

        /**
         * Export model.
         * 
         * @return string
         */
        public export(): string {
            return JSON.stringify(this.w)
        }

        /**
         * Import model.
         * 
         * @param arg string
         */
        public import(arg: string): void {
            this.w = JSON.parse(arg)
        }
    }
}