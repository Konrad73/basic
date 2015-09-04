var path = require('path');


    module.exports = {

    resolve: {
        root: path.resolve('./app')
    },

    entry: {
        app: ["webpack/hot/dev-server", "./app/master.js"]
    },

    output: {
        path: "./dist",
        publicPath: "/public/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css?modules" },
            { test: /\.scss$/, loader: "style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]!sass" },
            { test: /\.js$/, loader: "jsx-loader" },
            { test: /\.jsx$/, loader: "jsx-loader" },
            { test: /\.js$/, loader: "babel-loader" },
            { test: /\.jsx$/, loader: "babel-loader" },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader'}
        ]
    }
}

