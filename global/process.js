process.argv.forEach(function(val,index,array){
    console.log(val,index,array);
});

// process.kill(2079);

process.on('exit',function(){
   console.log('退出前执行');
});

process.on('uncaughtException',function(e){
    console.log('uncaughtException',e.message);
});

try{
    console.log('a');
}
catch(e){
    console.log(e.message);
}

//cwd current working directory
console.log(process.cwd());
//和下面那个一样作用但是，它可以改变
console.log(__dirname);

procese.chdir('..');

console.log(process.cwd());
console.log(__dirname);
