const {resolve} = require('@wangct/node-util');

module.exports = {
  port:8088,
  disableCssModules:[resolve('src/components'),resolve('src/styles')],
  alisa:{
    '@lib':resolve('src/components'),
  }
};
