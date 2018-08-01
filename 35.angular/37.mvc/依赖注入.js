//注册表
var registry ={
     $http:{},
     countService:{
        count:0,
        add:function(){
            this.count++;
        }
    }
}

function greet(countService){
    countService.add();
    countService.add();
    console.log(countService.count);
}

var inject = function(fun,context){
    var src = fun.toString();

    //src.matcher(// function greet(countService))
    var matcher = src.match(/function\s?\w+\((\w+)\)/);
    console.log(matcher);
    var argnames = matcher.slice(1);
    console.log(argnames);
    var args =[];
    for(var i=0;i<argnames.length;i++){
        var argObj  =registry[argnames[i]];
        args.push(argObj);
    }
    fun.apply(context,args);
}
inject(greet);