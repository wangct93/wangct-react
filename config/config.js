const {resolve} = require('@wangct/node-util');

module.exports = {
  port:8088,
  disableCssModules:[resolve('es'),resolve('src/styles')],
  alias:{
    '@lib':resolve('es'),
  }
};
