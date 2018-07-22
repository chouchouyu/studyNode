var http = require('http');
var fs = require('fs');
//npm install mime
var mime = require('mime');

function server(request,response){
    var url =request.url;
    if(url=='/'){
        response.setHeader('Content-Type','text/html;charset=utf-8');
        fs.readFile('index.html',function(err,data){
            response.write(data);
            response.end();
        })
    }else{
        static(url,response);
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
    console.log('url--->'+url.slice(1));
            //content Type 对照表  http://tool.oschina.net/commons/
            response.setHeader('Content-Type',mime.getType(url)+';charset=utf-8');
            fs.readFile(url.slice(1),'utf-8',function(err,data){
                response.write(data);
                response.end();
            })
}

var server =http.createServer(server);

server.listen(8888,'localhost');
// console.log('request.header');
