var http = require('http');
var fs = require('fs');
//npm install mime
var mime = require('mime');
var url = require('url');

function server(request,response){
    // var url =request.url;
        //true代表query转对象
        var urlObj = url.parse(request.url,true);
        var pathname= urlObj.pathname;
     
    if(pathname==='/'){
        response.setHeader('Content-Type','text/html;charset=utf-8');
        fs.readFile('index.html',function(err,data){
            response.write(data);
            response.end();
        })
    }else if(pathname == '/clock'){
        var counter =0;
        var int = setInterval(function(){
            let time=new Date();
            response.write(time.toLocaleString());
            counter++;
            if(counter ==5){
                clearInterval(int);
                response.end();
            }
        })
    }else{
        static(pathname,response);
    }
    // else if(url == '/style.css'){
    //     //content Type 对照表  http://tool.oschina.net/commons/
    //     response.setHeader('Content-Type','application/x-javascript;charset=utf-8');
    //     fs.readFile('style.css','utf-8',function(err,data){
    //         response.write(data);
    //         response.end();
    //     })
    // }
}

function static(url,response){
            //content Type 对照表  http://tool.oschina.net/commons/
            response.setHeader('Content-Type',mime.getType(url)+';charset=utf-8');
            fs.readFile(url.slice(1),'utf-8',function(err,data){
                response.write(data);
                response.end();
            })
}

var server =http.createServer(server);

server.listen(8888,'localhost');
console.log('成功');
