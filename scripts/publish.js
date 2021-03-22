const {spawn} = require("@wangct/node-util/lib/spawn");


start();

/**
 * 开始发布
 * @author wangchuitong
 */
async function start(){
  await spawn('npm',['run','babel']);
  await spawn('npm',['pu','--registry','https://registry.npmjs.org/','--access=public']).then(() => {
    console.log('发布成功');
  }).catch((code) => {
    console.log('发布失败，错误码：',code);
  });
}
