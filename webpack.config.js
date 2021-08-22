const path = require('path');

module.exports = {
    entry:'./src/index.js',

    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].[contenthash:5].js'
    },

    module:{},

    plugins:[],

    mode: 'production'
}