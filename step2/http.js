const http = require("http");
const fs = require("fs");
http.createServer(
	function(req,res) {
		if(fs.existsSync('.'+req.url+'.html')) {
			res.write(fs.readFileSync('.'+req.url+'.html'));
		} else {
			res.write("<h1>404 Not Found</h1>");
		}
		res.end();
	}
).listen(8080);
