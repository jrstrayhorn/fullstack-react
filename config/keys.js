if (process.env.NODE_ENV === 'production') {
  // we are in production - return prod keys
  module.exports = require('./prod');
} else {
  // we are in dev - return the dev keys
  module.exports = require('./dev');
}
