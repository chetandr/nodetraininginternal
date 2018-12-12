const http = require('http');

http.createServer(
	function(req, res) {
		let resStr = "404 not found";
		switch (req.url) {
			case "/home" :
                resStr = "Welcome Home";
				break;
			case '/about' :
                resStr = "something About me";
				break;
        }
		res.write(resStr);
		res.end();
	}
).listen(8080);
