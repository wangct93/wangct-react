
const path = require('path');

const resolve = (...paths) => path.resolve(process.cwd(),...paths);


module.exports = {
  routes:[
    {
      path:'/',
      component:'Test'
    }
  ],
  alias:{
    '@lib':resolve('src/components'),
    '@':resolve()
  },
  disableCssModules:true
};
