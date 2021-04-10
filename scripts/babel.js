const babel = require('@wangct/babel');
const {pathResolve} = require("@wangct/node-util/lib/path");
const util = require('@wangct/node-util');
const {spawn} = require("@wangct/node-util/lib/spawn");


start();

async function start(){
  await spawn('dev',['frame','--output','es/frame']);
  await updateComponent();

  babel({
    src:'es',
    output:'lib',
  });
}


async function updateComponent(){
  console.log('开始生成 components/index.js');
  const time = +new Date();
  const fs = require('fs');
  const componentDir = 'es';
  let list = fs.readdirSync(pathResolve(componentDir));
  list = list.filter(item => {
    const filePath = pathResolve(componentDir,item);
    return util.isDir(filePath) && util.isExist(pathResolve(filePath,'index.js'));
  });
  const componentOutput = pathResolve(componentDir,'index.js');
  const importContents = list.map(item => `import ${item} from './${item}';`);
  let content = `${importContents.join('')} export {${list.join(',')}};`;
  fs.writeFileSync(componentOutput,content);
  console.log(`成功生成 components/index.js ：${componentOutput} 用时：${+new Date() - time}ms`);
}
