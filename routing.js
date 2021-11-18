const http = require('http')


const routes = {
  '/': function routing(request,response){
   response.writeHead(200);
  response.end("Node Routing")
},

'/aboutus': function aboutUs(request,response){
  response.writeHead(200);
  response.end("About us Routing")

}
}

 http.createServer(function(req,res){
 if(req.url in routes){
   return routes[req.url](req,res);
 }
}).listen(8080);