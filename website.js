const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log("Request URL:", req.url);

    if (req.url === "/") 
        {
        res.statusCode = 200;
        res.end('<h1>This is Bunny</h1><p>Rock your body come on come on Rock your body</p>');
        }

    else if (req.url ===" /about") 
        {
        res.statusCode = 200;
        res.end('<h1>About Bunny</h1><p>I AM MUSIC</p>');
        }

    else if (req.url === "/hello") 
        {
            console.log("📦 Serving index.html from /hello");
                try 
                {
                    const data = fs.readFileSync('index.html', 'utf8');
                    res.statusCode = 200;
                    res.end(data);
                }               
            catch (err) 
                {
                    console.error("❌ Error reading index.html:", err);
                    res.statusCode = 500;
                    res.end('<h1>Internal Server Error</h1>');
                 }
        }

    else if (req.url === "/favicon.ico") 
        {
            res.writeHead(204);
            res.end(); // Skip favicon
        }

    else 
    {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1><p>This page was not found</p>');
    }

});

server.listen(port, () => {
    console.log(`✅ Server is listening on http://localhost:${port}`);
});