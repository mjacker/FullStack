const http = require('http');

var port = 3000;
const server = http.createServer((req, res) => {
	res.write("Hello This is my first Node js tes");
	res.end();
});

server.listen(port, () => {
	console.log(`Server is Running ${port}`)
})
