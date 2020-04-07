const {resolve} = require('wangct-server-util');

module.exports = {
  routes:[
    {
      path:'/',
      component:'Layout',
      children:[
        {
          path:'/',
          component:'Test',
        }
      ]
    }
  ],
  port:8088,
  disableCssModules:true,
  alisa:{
    '@lib':resolve('src/components'),
  }
};
