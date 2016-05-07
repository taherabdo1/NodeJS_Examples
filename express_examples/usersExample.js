var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.post("/addUser",function(req , res){
	console.log("received a new request");
	
	req.on('data', function (chunk) {
	   console.log(JSON.parse(chunk));
		newUser = JSON.parse(chunk);
		fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		   data = JSON.parse( data );
		   data["user4"] = newUser;
		   console.log( data );
    	   fs.writeFile('users.json', JSON.stringify(data));
	//	   res.writeHead(200, {
	//			'Content-Type': 'text/html'
	//		});
	//	   res.end("return test");
		res.header("Access-Control-Allow-Origin", "*");
		res.send(newUser);		
		res.end();
		console.log("result sent");
	   });

    });
	  
})

app.get('/addNewUser', function (req, res) {
   res.sendFile( __dirname + "/" + "addNewUser.htm" );
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
