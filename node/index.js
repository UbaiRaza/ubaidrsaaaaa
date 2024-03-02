const fs = require('fs');
const http = require('http');


fs.mkdirSync("new-folder");
fs.writeFileSync("new-folder/app.js", "const sum = ubaid \n console.log(sum)");
const server = http.createServer((req, res) => {
    const url = req.url;
    res.end('v dfdcxvc');
});

server.listen(8000);