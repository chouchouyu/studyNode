var util = require('util');
function Parent(){
    this.name ='father';
    this.name = 49;
    this.say = function(){
        console.log('hello',this.name);
    }
}



function Child(){
    this.name ='son';
    this.age = 9;
    
}

Parent.prototype.showName= function(){
    console.log(this.name);
}

// child继承parent
//缺点：不能传参，会继承私有属性
Child.prototype = new Parent();
var child = new Child();
child.showName();
        //      new Parent   parenet.prototype object.prototype 
console.log(child.__proto__.__proto__.__proto__==Object.prototype);
//________________
util.inherits(Child,Parent);

//-----------
function Persion(){
    this.name = 'pep';
    this.Parent = {
        parenet:'parent'
    }
}
var p  = new Persion();
console.log(util.inspect(p));//Persion { name: 'pep' } 类似toString()
/**
 * showHidden 是否显示隐藏属性
 * depth   对象的递归显示深度
 * colors 是否显示颜色
 */
console.log(util.inspect(p,true,4,true));
console.log(util.inspect(p,true,0,true));
console.log('+++++++++++++++++++++++++');
Persion.prototype.toString = function(){
    console.log('this is',this.name);
}
console.log(p.toString());//[object Object]

 //+++++++++++++++++
 var arr1 = [1,2];
 var arr2 = [3,4,5];
console.log(arr1.concat(arr2));
//和上面一样
Array.prototype.push.apply(arr1,arr2);
console.log(arr1);
//相当于
// arr1.push(3);
// arr1.push(4);

util.isArray([]);
util.isDate([]);
util.isRegExp([]);