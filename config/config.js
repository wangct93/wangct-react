const {resolve} = require('@wangct/node-util');

module.exports = {
  port:8088,
  disableCssModules:true,
  alisa:{
    '@lib':resolve('src/components'),
  }
};
