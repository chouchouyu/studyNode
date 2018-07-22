var http = require('http');

function server(request,response){
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);

    response.statuesCode = 404;
    response.setHeader('Content-Type','text/html;charset=utf-8');
    response.setHeader('name','wsm');
    response.write(new Date().toString());
    response.end();
}

var server =http.createServer(server);

server.listen(8888,'localhost');
// console.log('request.header');
