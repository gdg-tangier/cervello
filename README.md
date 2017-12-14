## Cervello

A simple machine learning lib written in Typescript.

### Features

- Linear Regression with **[Gradient Descent](https://www.kdnuggets.com/2017/04/simple-understand-gradient-descent-algorithm.html)**.

- **[Feed forward Neural Network with backpropagation](https://brilliant.org/wiki/feedforward-neural-networks)**.


#### Installation

npm: `npm install cervello --save`


#### Linear Regression

```javascript

import {Cervello} from "cervello"

let data = {inputs: [1,2,3,4,5,6], outputs: [1,2,3,4,5,6]}

let lr = new Cervello.LinearRegression().train(data)

let result = lr.predict(7)

console.log(result) // => 7

```

##### Import and export

Your can serialize Linear model and export it by `export()`, or you can load (a,b) of a trained linear model and use them as well.

```javascript
// Export
let seralize = lr.export() // [a,b] => (ax + b) 

// Import/Load
lr.import([1.5, 2]) // which means => (y = 1.5x + 2)
```

#### Neural Network

```javascript
import {Cervello} from "cervello"

// XOR Problem
let data = [{input: [0, 0], output: [0]},
            {input: [0, 1], output: [1]},
            {input: [1, 0], output: [1]},
            {input: [1, 1], output: [0]}]

let nn = new Cervello.NeuralNetwork().train(data)

let result = nn.predict([0,1])

console.log(result) // => [0.99]

```

You can specify which options you want to use such like **hiddenLayers**, **iterations**, **neurons (units)**, **Learning Rate** and **activation method**.

##### Available options:

- hiddenLayer: (numebr)  : The number of hiddenLayer.
- units: (number)        : The number of neurons foreach hiddenLayer.
- iteration: (number)    : The number of iteration of (forward/back) probagation.
- learningRate: (number) : The number of how faster could our net learn.
- activator : (string)  : activation method weather **sigmoid** or **htan**.


##### Other example (Digit recognition)

```javascript
import {Cervello} from "cervello"

let one = number(
  '.....$.' +
  '..$$$$.' +
  '.....$.' +
  '.....$.' +
  '.....$.' +
  '.....$.' +
  '...$$$$'
)

let two = number(
  '$$$$$$$' +
  '......$' +
  '......$' +
  '$$$$$$$' +
  '$......' +
  '$......' +
  '$$$$$$$'
)

let three = number(
  '$$$$$$$' +
  '......$' +
  '......$' +
  '$$$$$$$' +
  '......$' +
  '......$' +
  '$$$$$$$'
)

let four = number(
  '$......' +
  '$.....$' +
  '$.....$' +
  '$$$$$$$' +
  '......$' +
  '......$' +
  '......$'
)

// Neural network options
let options = {hiddenLayer: 2, units: 4, iteration: 100000, activator: "sigmoid"}

// Init Neural Network.
let nn = new Cervello.NeuralNetwork(options)

// Train
nn.train([{input: one, output: results("1")},
          {input: two, output: results("2")},
          {input: three, output: results("3")},
          {input: four, output: results("4")}])

// Predict
let result = nn.predict(number(
  '.....$.' +
  '.$$$$$.' +
  '.....$.' +
  '.....$.' +
  '.....$.' +
  '.....$.' +
  '...$$$$'
))

console.log(result) // ~ [0.1]

// helpers
function number(string) {
  return string
    .trim()
    .split('')
    .map(function(symbol){
        if ('$' === symbol) return 1
        if ('.' === symbol) return 0
    })
}

function results(number) {
  if (number === '1') return [ 0.1 ]
  if (number === '2') return [ 0.3 ]
  if (number === '3') return [ 0.5 ]
  if (number === '4') return [ 0.7 ]
  return 0
}
```
##### Import and export

It's the same as Linear model, you can serialize the model wedges by `export()` that will return a serlized object of NN wedges. 

```javascript
// Export model
let serialized = nn.export() // => seralized object (string)

// Import model
nn.import(seralized)
```

##### Activation methods

- [Sigmoid](https://www.wikiwand.com/en/Sigmoid_function)
- [hyperbolic tangent](http://reference.wolfram.com/language/ref/Tanh.html)

## Contributors

<a href="https://www.meetup.com/GDGtangier"><img src="https://i.imgur.com/ekYXyPW.png"/></a>

## LICENSE
[MIT](https://opensource.org/licenses/MIT)
