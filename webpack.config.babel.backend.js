const path = require('path');
const buildPath = path.resolve(__dirname, 'build/target');

module.exports = {
  target: "node",
  entry: {
    app: ["./index.js"]
  },
  output: {
    path: buildPath,
    filename: "bundle-back.js"
  }
};
