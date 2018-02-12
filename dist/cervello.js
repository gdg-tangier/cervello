(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Cervello", [], factory);
	else if(typeof exports === 'object')
		exports["Cervello"] = factory();
	else
		root["Cervello"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Data;
    (function (Data) {
        var Normalize = /** @class */ (function () {
            /**
             * Create new Normalize instance.
             *
             * @param input
             * @param output
             */
            function Normalize(input, output) {
                this.input = input;
                this.output = output;
            }
            return Normalize;
        }());
        Data.Normalize = Normalize;
        var Sum = /** @class */ (function () {
            /**
             * Create a new Sum instance.
             *
             * @param sum
             * @param result
             */
            function Sum(sum, result) {
                this.sum = sum;
                this.result = result;
            }
            return Sum;
        }());
        Data.Sum = Sum;
    })(Data = exports.Data || (exports.Data = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MathHelpers;
    (function (MathHelpers) {
        var Activation;
        (function (Activation) {
            var Sigmoid = /** @class */ (function () {
                function Sigmoid() {
                }
                /**
                 * Deduce the y from x.
                 *
                 * @param x number
                 *
                 * @return number
                 */
                Sigmoid.prototype.value = function (x) {
                    return 1 / (1 + Math.exp(-x));
                };
                /**
                 * Deduce y value from x sigmoid prime.
                 *
                 * @param x number
                 *
                 * @return number
                 */
                Sigmoid.prototype.prime = function (x) {
                    return Math.exp(-x) / Math.pow(1 + Math.exp(-x), 2);
                };
                return Sigmoid;
            }());
            Activation.Sigmoid = Sigmoid;
            var Htan = /** @class */ (function () {
                function Htan() {
                }
                /**
                 * Hyperbolic tangent.
                 *
                 * @param x number
                 */
                Htan.prototype.value = function (x) {
                    if (x === Infinity) {
                        return 1;
                    }
                    if (x === -Infinity) {
                        return -1;
                    }
                    var y;
                    y = Math.exp(x * 2);
                    return ((y - 1) / (y + 1));
                };
                /**
                 * Hyperbolic tangent prime.
                 *
                 * @param x number
                 *
                 * @return number
                 */
                Htan.prototype.prime = function (x) {
                    return 1 - Math.pow((Math.exp(2 * x) - 1) / (Math.exp(2 * x) + 1), 2);
                };
                return Htan;
            }());
            Activation.Htan = Htan;
            var Relu = /** @class */ (function () {
                function Relu() {
                }
                /**
                 * Rectified linear unit.
                 *
                 * @param x number
                 *
                 * @return number
                 */
                Relu.relu = function (x) {
                    if (x > 0) {
                        return x;
                    }
                    return (x / 320);
                };
                /**
                 * Rectified linear unit derivative.
                 *
                 * @param x number
                 *
                 * @return number
                 */
                Relu.prime = function (x) {
                    if (x > 0) {
                        return 1;
                    }
                    return 0;
                };
                return Relu;
            }());
            Activation.Relu = Relu;
        })(Activation = MathHelpers.Activation || (MathHelpers.Activation = {}));
        var Gaussian = /** @class */ (function () {
            function Gaussian() {
            }
            /**
             * Generate a random Gaussian distribution.
             *
             * @return number
             */
            Gaussian.random = function () {
                return Math.sqrt(-2 * Math.log(Math.random())) * Math.cos(2 * Math.PI * Math.random());
            };
            return Gaussian;
        }());
        MathHelpers.Gaussian = Gaussian;
        var Matrix = /** @class */ (function () {
            /**
             * Create a new Matrix instance.
             *
             * @param args
             */
            function Matrix(args) {
                /**
                 * Tha Matrix array.
                 *
                 * @var m any[]
                 */
                this.m = [];
                if (Array.isArray(args)) {
                    this.rows = args.length;
                    this.cols = args[0].length;
                    for (var i = 0; i < this.rows; i++) {
                        this.m[i] = [];
                        for (var j = 0; j < this.cols; j++) {
                            this.m[i][j] = args[i][j];
                        }
                    }
                }
                else {
                    this.rows = args.rows;
                    this.cols = args.cols;
                    for (var i_1 = 0; i_1 < this.rows; i_1++) {
                        this.m[i_1] = [];
                        for (var j_1 = 0; j_1 < this.cols; j_1++) {
                            if (args.values) {
                                var random = args.values();
                                this.m[i_1][j_1] = random;
                            }
                            else {
                                this.m[i_1][j_1] = 0;
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
            Matrix.prototype.get = function () {
                return this;
            };
            /**
             * Transform matrix.
             *
             * @param call function
             *
             * @return MathHelpers.Matrix
             */
            Matrix.prototype.transform = function (call) {
                for (var i = 0; i < this.rows; i++) {
                    for (var j = 0; j < this.cols; j++) {
                        this.m[i][j] = call(this.m[i][j]);
                    }
                }
                return this;
            };
            /**
             * Sum of two matrices.
             *
             * @param m1 MathHelpers.Matrix
             * @param m2 MathHelpers.Matrix
             *
             * @return MathHelpers.Matrix
             */
            Matrix.add = function (m1, m2) {
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
            };
            /**
             * Substraction of two matrices.
             *
             * @param m1 MathHelpers.Matrix
             * @param m2MathHelpers.Matrix
             *
             * @return MathHelpers.Matrix
             */
            Matrix.subtract = function (m1, m2) {
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
            };
            /**
             * Multiplying elements of two matrices.
             *
             * @param m1 MathHelpers.Matrix
             * @param m2 MathHelpers.Matrix
             *
             * @return MathHelpers.Matrix
             */
            Matrix.multiplyElements = function (m1, m2) {
                var result = new Matrix({ rows: m1.rows, cols: m1.cols });
                for (var i = 0; i < m1.rows; i++) {
                    result.m[i] = [];
                    for (var j = 0; j < m1.m[i].length; j++) {
                        result.m[i][j] = m1.m[i][j] * m2.m[i][j];
                    }
                }
                return result;
            };
            /**
             * Multiply by scalar.
             *
             * @param m1 MathHelpers.Matrix
             * @param num number
             *
             * @return MathHelpers.Matrix
             */
            Matrix.multiplyScalar = function (m1, num) {
                var result = new Matrix({ rows: m1.rows, cols: m1.cols });
                for (var i = 0; i < m1.rows; i++) {
                    for (var j = 0; j < m1.cols; j++) {
                        result.m[i][j] = m1.m[i][j] * num;
                    }
                }
                return result;
            };
            /**
             * Transpose matrix.
             *
             * @return MathHelpers.Matrix
             */
            Matrix.prototype.transpose = function () {
                var result = new Matrix({ rows: this.cols, cols: this.rows });
                for (var i = 0; i < this.cols; i++) {
                    result.m[i] = [];
                    for (var j = 0; j < this.rows; j++) {
                        result.m[i][j] = this.m[j][i];
                    }
                }
                return result;
            };
            /**
             * Multiply tow matrices.
             *
             * @param m1 MathHelpers.Matrix
             * @param m2 MathHelpers.Matrix
             *
             * @return MathHelpers.Matrix
             */
            Matrix.multiply = function (m1, m2) {
                if (m1.cols !== m2.rows) {
                    throw new Error('You can only multiply matrices with equal dimensions');
                }
                var result = new Matrix({ rows: m1.rows, cols: m2.cols });
                for (var i = 0; i < m1.rows; i++) {
                    result.m[i] = [];
                    for (var j = 0; j < m2.cols; j++) {
                        var sum = 0;
                        for (var k = 0; k < m1.cols; k++) {
                            sum += m2.m[k][j] * m1.m[i][k];
                        }
                        result.m[i][j] = sum;
                    }
                }
                return result;
            };
            return Matrix;
        }());
        MathHelpers.Matrix = Matrix;
    })(MathHelpers = exports.MathHelpers || (exports.MathHelpers = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, index_1, index_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Cervello;
    (function (Cervello) {
        var LinearRegression = /** @class */ (function () {
            /**
             * Create new LinearRegression instance.
             */
            function LinearRegression(options) {
                /**
                 * @var iteration number
                 */
                this.iteration = 1000;
                /**
                 * @var LearningRate: number
                 */
                this.learningRate = 0.001;
                if (options) {
                    this.iteration = options.iteration ? options.iteration : this.iteration;
                    this.learningRate = options.learningRate ? options.learningRate : this.learningRate;
                }
                this.a = 0;
                this.b = 0;
            }
            /**
             * Train the linear Model.
             *
             * @param data any
             *
             * @return Promise
             */
            LinearRegression.prototype.train = function (data) {
                var _this = this;
                var error;
                return new Promise(function (res, rej) {
                    for (var i = 0; i < _this.iteration; i++) {
                        _this.gradientDec(data);
                    }
                    res([_this.a, _this.b]);
                });
            };
            /**
             * calculate gradient descent.
             *
             * @param data any
             */
            LinearRegression.prototype.gradientDec = function (data) {
                var a_gr = 0;
                var b_gr = 0;
                var x = 0;
                var y = 0;
                var Total = data.inputs.length;
                for (var i = 0; i < data.inputs.length; i++) {
                    x = data.inputs[i];
                    y = data.outputs[i];
                    a_gr += -1 * ((2 / data.inputs.length) * x * (y - ((this.a * x) + this.b)));
                    b_gr += -1 * ((2 / data.inputs.length) * (y - ((this.a * x) + this.b)));
                }
                this.a = this.a - (a_gr * this.learningRate);
                this.b = this.b - (b_gr * this.learningRate);
            };
            /**
             * Predict output
             *
             * @param input number
             */
            LinearRegression.prototype.predict = function (input) {
                // y = ax + b
                return (input * this.a) + this.b;
            };
            /**
             * Import Model.
             *
             * @param data
             */
            LinearRegression.prototype.import = function (data) {
                this.a = data[0];
                this.b = data[1];
            };
            /**
             * export model
             *
             * @return Array<number>
             */
            LinearRegression.prototype.export = function () {
                return [this.a, this.b];
            };
            return LinearRegression;
        }());
        Cervello.LinearRegression = LinearRegression;
        var NeuralNetwork = /** @class */ (function () {
            /**
             * Create new instance.
             *
             * @param options Array
             */
            function NeuralNetwork(options) {
                /**
                 * Units of each layer
                 *
                 * @var middleLayerUnits number
                 */
                this.middleLayerUnits = 3;
                /**
                 * hidden layers.
                 *
                 * @var mddleLayer number
                 */
                this.middleLayer = 1;
                /**
                 * Iteration
                 *
                 * @var iteration number
                 */
                this.iteration = 100000;
                /**
                 * Learning rate.
                 *
                 * @var learningRate number
                 */
                this.learningRate = 99;
                /**
                 * Activation method.
                 *
                 * @var activation any
                 */
                this.activation = new index_1.MathHelpers.Activation.Sigmoid();
                if (options) {
                    this.iteration = options.iteration ? options.iteration : this.iteration;
                    this.learningRate = options.learningRate ? options.learningRate : this.learningRate;
                    this.middleLayer = options.hiddenLayer ? options.hiddenLayer : this.middleLayer;
                    this.middleLayerUnits = options.units ? options.units : this.middleLayerUnits;
                    if (options.activator === "htan") {
                        this.activation = new index_1.MathHelpers.Activation.Htan();
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
            NeuralNetwork.prototype.train = function (input) {
                var data;
                var result = null;
                var back = null;
                data = this.format(input);
                if (!this.w) {
                    this.boot(data);
                }
                for (var i = 0; i < this.iteration; i++) {
                    result = this.forward(data.input);
                    back = this.back(data, result);
                }
                return this;
            };
            /**
             * Setup wedges.
             *
             * @param data Data.Normalize
             */
            NeuralNetwork.prototype.boot = function (data) {
                this.w = [];
                this.w.push(new index_1.MathHelpers.Matrix({
                    rows: this.middleLayerUnits,
                    cols: data.input.m[0].length,
                    values: index_1.MathHelpers.Gaussian.random
                }));
                for (var i = 1; i < this.middleLayer; i++) {
                    this.w.push(new index_1.MathHelpers.Matrix({
                        rows: this.middleLayerUnits,
                        cols: this.middleLayerUnits,
                        values: index_1.MathHelpers.Gaussian.random
                    }));
                }
                this.w.push(new index_1.MathHelpers.Matrix({
                    rows: data.output.m[0].length,
                    cols: this.middleLayerUnits,
                    values: index_1.MathHelpers.Gaussian.random
                }));
            };
            /**
             * Forward propagation.
             *
             * @param {data} MathHelpers.Matrix
             *
             * @return Array<Data.sum>
             */
            NeuralNetwork.prototype.forward = function (data) {
                var result = [];
                result.push(this.mutiply(this.w[0], data.transpose()));
                for (var i = 1; i < this.middleLayer; i++) {
                    result.push(this.mutiply(this.w[i], result[i - 1].result));
                }
                result.push(this.mutiply(this.w[this.w.length - 1], result[result.length - 1].result, true));
                return result;
            };
            /**
             * Backward propagation.
             *
             * @param {data} Data.Normalize
             * @param {results} Array<Data.Sum>
             *
             * @return MathHelpers.Matrix
             */
            NeuralNetwork.prototype.back = function (data, results) {
                var diff = index_1.MathHelpers.Matrix.subtract(data.output.transpose(), results[results.length - 1].result);
                var delta = index_1.MathHelpers.Matrix.multiplyElements(results[results.length - 1].sum.transform(this.activation.prime), diff);
                var changes = index_1.MathHelpers.Matrix.multiplyScalar(index_1.MathHelpers.Matrix.multiply(delta, results[this.middleLayer - 1].result.transpose()), this.learningRate);
                this.w[this.w.length - 1] = index_1.MathHelpers.Matrix.add(this.w[this.w.length - 1], changes);
                for (var i = 1; i < this.middleLayer; i++) {
                    delta = index_1.MathHelpers.Matrix.multiplyElements(index_1.MathHelpers.Matrix.multiply(this.w[this.w.length - i].transpose(), delta), results[results.length - (i + 1)].sum.transform(this.activation.prime));
                    changes = index_1.MathHelpers.Matrix.multiplyScalar(index_1.MathHelpers.Matrix.multiply(delta, results[results.length - (i + 1)].result.transpose()), this.learningRate);
                    this.w[this.w.length - (i + 1)] = index_1.MathHelpers.Matrix.add(this.w[this.w.length - (i + 1)], changes);
                }
                delta = index_1.MathHelpers.Matrix.multiplyElements(index_1.MathHelpers.Matrix.multiply(this.w[1].transpose(), delta), results[0].sum.transform(this.activation.prime));
                changes = index_1.MathHelpers.Matrix.multiplyScalar(index_1.MathHelpers.Matrix.multiply(delta, data.input), this.learningRate);
                this.w[0] = index_1.MathHelpers.Matrix.add(this.w[0], changes);
                return diff;
            };
            /**
             * Predict result.
             *
             * @param input Array<number>
             *
             * @return number
             */
            NeuralNetwork.prototype.predict = function (input) {
                var predict = this.forward(new index_1.MathHelpers.Matrix([input]));
                return predict[predict.length - 1].result.m;
            };
            /**
             * Sum.
             *
             * @param w MathHelpers.Matrix
             * @param data MathHelpers.Matrix
             *
             * @return Data.sum
             */
            NeuralNetwork.prototype.mutiply = function (w, data, hidden) {
                var result;
                var sum;
                sum = index_1.MathHelpers.Matrix.multiply(w, data);
                result = sum.transform(this.activation.value);
                var response = new index_2.Data.Sum(sum, result);
                return response;
            };
            /**
             * Normalize input.
             *
             * @param inputData Array<any>
             *
             * @return Data.Normalize
             */
            NeuralNetwork.prototype.format = function (inputData) {
                var input = [];
                var output = [];
                for (var i = 0; i < inputData.length; i++) {
                    input.push(inputData[i].input);
                    output.push(inputData[i].output);
                }
                return new index_2.Data.Normalize(new index_1.MathHelpers.Matrix(input), new index_1.MathHelpers.Matrix(output));
            };
            /**
             * Export model.
             *
             * @return string
             */
            NeuralNetwork.prototype.export = function () {
                return JSON.stringify(this.w);
            };
            /**
             * Import model.
             *
             * @param arg string
             */
            NeuralNetwork.prototype.import = function (arg) {
                this.w = JSON.parse(arg);
            };
            return NeuralNetwork;
        }());
        Cervello.NeuralNetwork = NeuralNetwork;
    })(Cervello = exports.Cervello || (exports.Cervello = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);
});
//# sourceMappingURL=cervello.js.map