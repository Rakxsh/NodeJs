
/**                 HTTP SERVER */


const http = require("http")
const server = http.createServer((req,res)=>{
 res.writeHead(200,{'Content-Type':'text/plain'})
 res.write("welcome to http server")
  res.end()
}).listen(8080)

