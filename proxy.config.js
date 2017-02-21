const mock = {};

require('fs').readdirSync(require('path').join(`${__dirname}/mock/model`)).forEach((file) => {
  Object.assign(mock, require('./mock/model/' + file))
});

module.exports = mock;
