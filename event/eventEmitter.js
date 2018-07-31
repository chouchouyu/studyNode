var EventEmitter = require('events').EventEmitter;

var util = require('util');

function Bell(name){
    this.name = name;
}
util.inherits(Bell,EventEmitter);

var jingGoldBell =  new  Bell ('jingGolde');
jingGoldBell.on('ring',function(){
    console.log('收到礼物');
});

var drop =function(who){
    console.log(who,'铃铛调了dropdrop ');
};

jingGoldBell.addListener('ring',function(){
    console.log('收到礼物 addListener');
});
jingGoldBell.removeListener('drop',drop);
jingGoldBell.removeAllListeners('ring');
jingGoldBell.once('drop',function(){
    console.log('铃铛丢了 once');
});

jingGoldBell.emit('ring');
jingGoldBell.emit('drop','我');
jingGoldBell.emit('drop','老人');

//[function function]
console.log(jingGoldBell.listeners('ring'));