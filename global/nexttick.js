console.log('0事件');
console.log('1事件');
console.log('2事件');
console.log('3事件');
console.log('---------');

console.log('0事件');
//会等其他的都调用完成后再执行
setTimeout(function(){
    console.log('1事件 setTimeout 后');
});
console.log('2事件');
console.log('3事件');
console.log('---------');
//单数这样做有一个弊端，就是如果有个死循环
//就看就永远都不会执行了
console.log('0事件');
//会等其他的都调用完成后再执行
process.nextTick(function(){
    console.log('1事件 nextTick 先');
});
console.log('2事件');
console.log('3事件');

process.nextTick(function(){
    console.log('1事件 nextTick 1');
    process.nextTick(function(){
        console.log('1事件 nextTick 2');
        process.nextTick(function(){
            console.log('1事件 nextTick 3');
        });
    });
});
//setTimeout 最后调用