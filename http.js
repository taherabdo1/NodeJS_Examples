// Include http module.
var http = require("http");

// Create the server. Function passed as parameter is called on every request made.
// request variable holds all request parameters
// response variable allows you to do anything with response sent to the client.
var server = http.createServer(function (request, response) {
	// Attach listener on end event.
	// This event is called when client sent all data and is waiting for response.
//	request.on("end", function () {
		// Write headers to the response.
		// 200 is HTTP status code (this one means success)
		// Second parameter holds header fields in object
		// We are sending plain text, so Content-Type should be text/plain
		response.writeHead(200, {
			'Content-Type': 'text/html'
		});
		// Send data and end response.
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World!");
  response.write("</body>");
  response.write("</html>");
		response.end('Hello HTTP!');
//	});
// Listen on the 8080 port.
});
server.listen(80);
console.log("Server is listening");
