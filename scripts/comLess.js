const {spawn} = require("@wangct/node-util/lib/spawn");
const {logInfo} = require("@wangct/node-util/lib/log");
const {pathFilename} = require("@wangct/node-util/lib/path");
const {pathResolve} = require("@wangct/node-util/lib/path");
const {pathDirname} = require("@wangct/node-util/lib/path");
const {pathExtname} = require("@wangct/node-util/lib/path");
const {fileEach} = require("@wangct/node-util/lib/file");

start();

async function start(){
  let str = '';
  const dirname = pathResolve('es');
  const targetLessPath = pathResolve('src/styles/com.less');
  logInfo('生成结束，目标地址：',targetLessPath);
  await fileEach(dirname,(filePath) => {
    if(pathExtname(filePath) === 'less' && pathDirname(pathDirname(filePath)) === dirname){
      logInfo('生成文件：',filePath);
      str += `@import "${require('path').relative(pathDirname(targetLessPath),filePath)}";\n`;
    }
  });
  require('fs').writeFileSync(targetLessPath,str);
  logInfo('生成结束，地址：',targetLessPath);
  const cssPath = pathResolve('dist/react.css');
  logInfo('开始编译成css，地址：',cssPath);
  await spawn('lessc',[targetLessPath,cssPath]);
}
