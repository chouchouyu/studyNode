var Person = require('./Human');
console.log(require.cache);//'/Users/admin/Documents/GitHub/studyNode/module/useHuman.js'
//清缓存
delete require.cache[require.resolve('./person')];//require.resolve返回绝对路径


var girl = new Person('小龙女',28);
var boy = new Person('杨过',15);

console.log(girl.getName(),girl.getAge());
console.log(boy.getName(),boy.getAge());

console.log(girl.home,boy.home);//北京 北京
console.log(girl.hasOwnProperty('home'));//false
girl.home='上海';
console.log(girl.home,boy.home);//上海 北京
console.log(girl.hasOwnProperty('home'));//true
Person.prototype.home='广东';
console.log(girl.home,boy.home);//上海 广东