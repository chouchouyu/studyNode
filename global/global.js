/*
global==Windows全局对象
module
exports 导出对象
require加载模块的方法
__dirname 当前模块所在的目录的绝对路径
__filename 当前模块的绝对路径
*/
// function x(){
  var name ='wsm';
//   exports.name = name;
  console.log(this.name);
//   console.log(global);
//   console.trace();//显示当前的调用堆栈
// }
//   1.当前模块内部的声明变量
// 2.外部导入的模块
// 3.全局对象
// 4.从外界传入的参数

//标准输入
process.stdin.on('data',function(data){
    console.log(data.toString());
});

//其实console.log 内部调用的的就是它
process.stdout.write('write');
console.log(process.pid);

