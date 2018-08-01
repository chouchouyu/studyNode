var EventEmitter= require('events');

var event = new EventEmitter();
var fs = require('fs');
var person ={}
event.on('name',out);
event.on('age',out);
fs.readFile('name.txt','utf-8',function(err,data){
    person.name=data;
    event.emit('name');
});

fs.readFile('age.txt','utf-8',function(err,data){
    person.age=data;
    event.emit('age');
});

function out(){
    if(person.name && person.age){
        console.log(person.name,person.age);
    }
}


function say(name,word){
    console.log(name,":",word);
}

// var newSay = say.bind(this,'张三');
function newSay(){
    say.apply(null,['张三'].concat(Array.prototype.slice.call(arguments)));
}
newSay('是不是傻');