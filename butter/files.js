var fs= require('fs');
var content = fs.readFileSync('index.js');
//<Buffer 41 42 43>
console.log(content);


//三种构建buffer的方法
var buf1 = new Buffer(3);
console.log(buf1);
// 初始不是0 <Buffer 41 42 43>
//清零 <Buffer 00 00 00>
buf1.fill(0);

buf1[0]=0x41;
buf1[1]=0x42;
buf1[2]=0x43;
var buf2 = new Buffer([0x41,0x42,0x43]);
var buf3 = new Buffer("ABC");
console.log(buf1.toString()
== buf2.toString()
== buf3.toString()
);

var buf4 = new Buffer("中","utf-8");
console.log(buf4);
var buf5 = new Buffer("a","ascii");
console.log(buf5);

//buffer的操作
//1.长度
var str = "你猜我是谁";
var buf6 = new Buffer(str);
console.log(str.length);//5
console.log(buf6.length); //15

//2.buffer和字符串的转换
//buf.toString('utf8')

console.log(buf6);
buf6[0]=0;
console.log(buf6);
//<Buffer e4 bd a0 e7 8c 9c e6 88 91 e6 98 af e8 b0 81>
//<Buffer 00 bd a0 e7 8c 9c e6 88 91 e6 98 af e8 b0 81>

var buf7 = new Buffer(12);
buf7.write("珠峰",0,6);
buf7.write("培训",6,6);
console.log(buf7.toString());

var buf8 = buf7.slice(0,7);
var buf9 = buf7.slice(7);
console.log(buf8.toString());//珠峰�
console.log(buf9.toString());//��训

var stringdecoder= require('string_decoder').StringDecoder;
var decoder= new stringdecoder();
console.log(decoder.write(buf8));//珠峰
console.log(decoder.write(buf9));//培训
//如果做成 var decoder2= new stringdecoder();

//复制buffer
var srcBuf = new Buffer([4,5,6]);
var tarBuf = new Buffer(6);
tarBuf[0]=1;
tarBuf[1]=2;
tarBuf[2]=3;
srcBuf.copy(tarBuf,3,0,3);
console.log(tarBuf);
{/* <Buffer 01 02 03 04 05 06> */}

var buf10=new Buffer(2);
buf10[0]=-10;
buf10[1]=260;

//如果大于255，对256取模
//如果小于0，先取模256，再加上256
console.log(buf10);//<Buffer f6 04>

var buf11 =new Buffer([1,2,3]);
var buf12 =new Buffer([4,5,6]);
var buf13= concat([buf11,buf12],6);

function concat(list,length){
    return Buffer.concat(list,length);
}
console.log(buf13);//<Buffer 01 02 03 04 05 06>