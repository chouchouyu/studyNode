function Person(){
    this.name = 'wsm';
    // return {name:'rename'}
}

/**
 * 1.创建空对象
 * 2. 把控对象作为this传入person
 * 3.返回这个对象
 */
var p = new Person;
console.log(p.name);

var p2 = Person.bind({name:'ssddd'});
var p3 = new p2;
console.log(p3.name);