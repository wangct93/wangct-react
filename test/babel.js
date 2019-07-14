/**
 * Created by wangct on 2019/3/9.
 */

const Babel = require('wangct-babel');


const watch = require('wangct-webpack/lib/watch');

watch.once();

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
        libraryName: "antd",
        style:true
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

