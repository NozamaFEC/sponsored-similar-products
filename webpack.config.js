const path = require('path')
const SRC_DIR = path.join(__dirname, '/Client-side/src');
const DIST_DIR = path.join(__dirname, '/Client-side/dist')

module.exports = {
    entry: `${SRC_DIR}/index.jsx`,
    output: {
        filename: 'bundle.js',
        path: DIST_DIR
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    'presets': ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    }
};