export namespace MathHelpers {

    export interface differentiable {
        /**
         * @param x number
         * 
         * @return number
         */
        value(x: number): number

        /**
         * @param x number
         * 
         * @return number
         */
        prime(x: number): number
    }

    export namespace Activation {

        export class Sigmoid implements differentiable {

            /**
             * Deduce the y from x.
             * 
             * @param x number
             * 
             * @return number
             */
            public value(x: number): number {
                return 1 / (1 + Math.exp(-x))
            }

            /**
             * Deduce y value from x sigmoid prime.
             * 
             * @param x number
             * 
             * @return number
             */
            public prime(x: number): number {
                return Math.exp(-x) / Math.pow(1 + Math.exp(-x), 2);
            }
        }

        export class Htan implements differentiable {
            
            /**
             * Hyperbolic tangent.
             * 
             * @param x number
             */
            public value(x: number): number {
                if (x === Infinity) {
                    return 1
                }

                if (x === -Infinity) {
                    return -1
                }

                let y: number;
                y = Math.exp(x * 2)
                return ((y - 1) / (y + 1))
            }

            /**
             * Hyperbolic tangent prime.
             * 
             * @param x number
             * 
             * @return number
             */
            public prime(x: number): number {
                return 1 - Math.pow((Math.exp(2 * x) - 1) / (Math.exp(2 * x) + 1), 2);
            }
        }

        export class Relu {

            /**
             * Rectified linear unit.
             * 
             * @param x number 
             * 
             * @return number
             */
            public static relu(x: number): number {
                if (x > 0) {
                    return x
                }
                return (x / 320)
            }

            /**
             * Rectified linear unit derivative.
             * 
             * @param x number
             * 
             * @return number
             */
            public static prime(x: number): number {
                if (x > 0) {
                    return 1
                }

                return 0;
            }
        }
    }

    export class Gaussian {

        /**
         * Generate a random Gaussian distribution.
         * 
         * @return number
         */
        public static random(): number {
            return Math.sqrt(-2 * Math.log(Math.random())) * Math.cos(2 * Math.PI * Math.random());
        }
    }

    export class Matrix {

        /**
         * Matrix row.
         * 
         * @var rows number
         */
        public rows: number;

        /**
         * Matrix columns.
         * 
         * @var cols
         */
        public cols: number;

        /**
         * Tha Matrix array.
         * 
         * @var m any[]
         */
        public m: any = []

        /**
         * Create a new Matrix instance. 
         * 
         * @param args 
         */
        public constructor(args: any) {
            if (Array.isArray(args)) {
                this.rows = args.length
                this.cols = args[0].length
                for (var i = 0; i < this.rows; i++) {
                    this.m[i] = [];

                    for (var j = 0; j < this.cols; j++) {
                        this.m[i][j] = args[i][j];
                    }
                }
            } else {
                this.rows = args.rows;
                this.cols = args.cols;
                for (let i = 0; i < this.rows; i++) {
                    this.m[i] = []
                    for (let j = 0; j < this.cols; j++) {
                        if (args.values) {
                            let random = args.values()
                            this.m[i][j] = random
                        } else {
                            this.m[i][j] = 0
                        }
                    }
                }
            }
        }

        /**
         * Getter.
         * 
         * @return MathHelpers.Matrix
         */
        public get(): Matrix {
            return this
        }

        /**
         * Transform matrix.
         * 
         * @param call function
         * 
         * @return MathHelpers.Matrix
         */
        public transform(call: (arg: number) => void): Matrix {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.m[i][j] = call(this.m[i][j]);
                }
            }

            return this;
        }

        /**
         * Sum of two matrices.
         * 
         * @param m1 MathHelpers.Matrix
         * @param m2 MathHelpers.Matrix
         * 
         * @return MathHelpers.Matrix
         */
        public static add(m1: Matrix, m2: Matrix): Matrix {
            // Number of rows and columns in first must equal number of rows and columns in second.
            if (m1.rows !== m2.rows || m1.cols !== m2.cols) {
                throw new Error('You can only add matrices with equal dimensions');
            }

            var result = new Matrix({ rows: m1.rows, cols: m1.cols });

            for (var i = 0; i < m1.rows; i++) {
                for (var j = 0; j < m1.cols; j++) {
                    result.m[i][j] = m1.m[i][j] + m2.m[i][j];
                }
            }

            return result;
        }

        /**
         * Substraction of two matrices.
         * 
         * @param m1 MathHelpers.Matrix
         * @param m2MathHelpers.Matrix
         * 
         * @return MathHelpers.Matrix 
         */
        public static subtract(m1: Matrix, m2: Matrix): Matrix {
            if (m1.rows !== m2.rows || m1.cols !== m2.cols) {
                throw new Error('You can only subtract matrices with equal dimensions');
            }

            var result = new Matrix({ rows: m1.rows, cols: m1.cols });

            for (var i = 0; i < m1.rows; i++) {
                for (var j = 0; j < m1.cols; j++) {
                    result.m[i][j] = m1.m[i][j] - m2.m[i][j];
                }
            }

            return result;
        }

        /**
         * Multiplying elements of two matrices. 
         * 
         * @param m1 MathHelpers.Matrix
         * @param m2 MathHelpers.Matrix
         * 
         * @return MathHelpers.Matrix
         */
        public static multiplyElements(m1: Matrix, m2: Matrix): Matrix {
            var result = new Matrix({ rows: m1.rows, cols: m1.cols })

            for (var i = 0; i < m1.rows; i++) {
                result.m[i] = [];

                for (var j = 0; j < m1.m[i].length; j++) {
                    result.m[i][j] = m1.m[i][j] * m2.m[i][j];
                }
            }

            return result;
        }

        /**
         * Multiply by scalar.
         * 
         * @param m1 MathHelpers.Matrix
         * @param num number
         * 
         * @return MathHelpers.Matrix
         */
        public static multiplyScalar(m1: Matrix, num: number): Matrix {
            var result = new Matrix({ rows: m1.rows, cols: m1.cols });

            for (var i = 0; i < m1.rows; i++) {
                for (var j = 0; j < m1.cols; j++) {
                    result.m[i][j] = m1.m[i][j] * num;
                }
            }

            return result;
        }

        /**
         * Transpose matrix.
         * 
         * @return MathHelpers.Matrix
         */
        public transpose(): Matrix {
            var result = new Matrix({ rows: this.cols, cols: this.rows });

            for (var i = 0; i < this.cols; i++) {
                result.m[i] = [];

                for (var j = 0; j < this.rows; j++) {
                    result.m[i][j] = this.m[j][i];
                }
            }

            return result;
        }

        /**
         * Multiply tow matrices.
         * 
         * @param m1 MathHelpers.Matrix
         * @param m2 MathHelpers.Matrix
         * 
         * @return MathHelpers.Matrix
         */
        public static multiply(m1: Matrix, m2: Matrix): Matrix {
            if (m1.cols !== m2.rows) {
                throw new Error('You can only multiply matrices with equal dimensions');
            }
            let result = new Matrix({ rows: m1.rows, cols: m2.cols })

            for (let i = 0; i < m1.rows; i++) {
                result.m[i] = []
                for (let j = 0; j < m2.cols; j++) {
                    let sum = 0;
                    for (let k = 0; k < m1.cols; k++) {
                        sum += m2.m[k][j] * m1.m[i][k];
                    }
                    result.m[i][j] = sum;
                }
            }

            return result
        }
    }
}