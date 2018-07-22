var http = require('http');
var url = require('url');
// http://localhost:8888/?wd=feature&usm=1&ie=utf-8&rsv_cq=query&rsv_dl=0_right_recommends_merge_21102&euri=1a959446f71e11e587372c600c837ad5
function server(request,response){
    //true代表query转对象
    var urlObj = url.parse(request.url,true);
    console.log(urlObj.query);
}

 

var server =http.createServer(server);

server.listen(8888,'localhost');
// console.log('request.header');
