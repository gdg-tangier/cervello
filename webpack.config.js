var webpack = require("webpack")

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "cervello.js",
        path: __dirname + "/dist",
        library: "Cervello",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    plugins: [
        /*
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })*/
    ],

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".js", ".json", ".tsx"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};