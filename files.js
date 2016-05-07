// Include http module,
var http = require("http"),
// And mysql module you've just installed.
	fs = require("fs");

// Create the http server.
var server = http.createServer(function (request, response) {
	// Attach listener on end event.
//	request.on("end", function () {
		if(request.url== '/'){
		// Read the file.
		fs.readFile("test.txt", 'utf-8', function (error, data) {
			// Write headers.
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			// Increment the number obtained from file.
			data = parseInt(data) + 1;
			// Write incremented number to file.
			console.log("new value is : "+data);
			fs.writeFile('test.txt', data);
			// End response with some nice message.
			response.end('This page was refreshed ' + data + ' times!');
			
				
			
		});
		}
		else{
						// Indicate that requested file was not found.
			response.writeHead(404);
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			response.write("invalid url :;");
			console.log("incorrect url");
			// And end request without sending any data.
			response.end();

		}
	});
	
	server.listen(80);
console.log("listening to clients");