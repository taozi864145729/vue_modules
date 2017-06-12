var path = require('path')
var webpack = require('webpack');

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname, "./dist"),
        filename:'bundle.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue'
        }
    },
    module:{
        loaders:[
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    }
}