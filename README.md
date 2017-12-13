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

let data = [{input: [0, 0], output: [0]},
            {input: [0, 1], output: [1]},
            {input: [1, 0], output: [1]},
            {input: [1, 1], output: [0]}]

let nn = new Cervello.NeuralNetwork().train(data)

let result = nn.predict([0,1])

console.log(result) // => [0.99]

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

## LICENSE
[MIT](https://opensource.org/licenses/MIT)

## Contributors

<a href="https://www.meetup.com/GDGtangier"><img src="https://i.imgur.com/ekYXyPW.png"/></a>
