const path = require('path');

module.exports = {
    entry: './src/app.js', // Entry point of your application
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production', // Set the mode to 'production' for optimized output
};