const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) =>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
       if (req.url === '/hello') {
        res.end('<h1>Hello Page</h1><p>You visited /hello</p>');
    } else {
        res.end('<h1>This is Bunny</h1> <br/> <p>Rock your body come on come on Rock your body</p>');
    }
});

server.listen(port, ()=>{ console.log(`Server is listening on port ${port}`);});