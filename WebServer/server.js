var http = require('http'); //untuk mengnport library http dari node_modules

var server = http.createServer(function (req, res) { //membuat object server
    res.writeHead(200, {'Content-Type': 'text/html'}); //utk menentukan respon header
    res.write("Welcome to nodejs pake HTML"); //utk menentukan respon body (konten yg dikirim ke client)
    res.end(); //mengakhiri respon
});

server.listen(8000); //menentukan port yg digunakan oleh server
console.log("Server ruuning on http://localhost:8000");