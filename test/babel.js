/**
 * Created by wangct on 2019/3/9.
 */

const Babel = require('wangct-babel');


const t = +new Date();
new Babel({
  src:'src/components',
  output:'lib',
  option: {
    presets: ['@babel/preset-react', '@babel/preset-env'],
    plugins: [
      ['@babel/plugin-transform-typescript', {
        isTSX: true,
        allExtensions: true
      }],
      ['import', {
        "libraryName": "antd",
        "libraryDirectory": "es"
      }],
      '@babel/plugin-transform-runtime',
      ['@babel/plugin-proposal-decorators', {legacy: true}],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-export-default-from',
    ]
  },
  success:() => {
    console.log('success，用时：',+new Date() - t,'ms');
  }
});

