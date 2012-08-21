var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		if(pathname == '/favicon.ico'){
			response.writeHead(404, {'Content-Type' : 'text/plain'});
			response.end('not found');
		} else {
		console.log("Request for " + pathname + " received");

		response.writeHead(200, {"Content-Type": "text/plain"});
		var content = route(handle, pathname);
		response.write(content);
		response.end();
		}
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}
exports.start = start;