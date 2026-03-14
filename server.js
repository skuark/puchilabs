const http = require('http');
const fs   = require('fs');
const path = require('path');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
};

http.createServer((req, res) => {
  let url = req.url === '/' ? '/index.html' : req.url;

  if (!path.extname(url)) {
    if (!url.endsWith('/')) { res.writeHead(301, { Location: url + '/' }); res.end(); return; }
    url += 'index.html';
  }

  fs.readFile(path.join(__dirname, url), (err, data) => {
    if (err) { res.writeHead(404); res.end('404 — Not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(url)] || 'application/octet-stream' });
    res.end(data);
  });

}).listen(3000, () => console.log('Puchilabs en http://localhost:3000'));
